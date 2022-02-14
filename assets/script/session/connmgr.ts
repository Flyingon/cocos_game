
import { wsConn } from "./conn";
import { getHandler, registerHandler } from "./handler";
import { getUserInfo } from "../util/user/userinfo";
import { game } from "../proto/compiled";
import { cfg } from "../cfg/cfg"

function _getHead(uid: string, cmd: string) {
    return game.MsgHead.create({
        uid: uid,
        cmd: cmd,
        type: 2,
        sId: "game",
        iId: "192.168.255.10",
        seq: String(new Date().getTime())
    })
}

const cmdLogin = "login"

registerHandler(cmdLogin, this, loginCb);
var bufAfterLogin: any = null;

// login 新建链接并登陆
export function login() {
    let uid = getUserInfo().get("name");
    let headReq = _getHead(uid, "login");
    // let dataJson = JSON.stringify({});
    let dataBuf = dataToBuffer({});
    let message = game.Msg.create({ head: headReq, data: dataBuf });
    console.log(`message = ${JSON.stringify(message)}`);
    let loginBuf = game.Msg.encode(message).finish();
    // console.log(`loginBuf = ${Array.prototype.toString.call(loginBuf)}`);
    wsConn.newConn(cfg.localvrWS, loginBuf);
}
// loginCb 登陆回调
function loginCb() {
    console.log("login success");
    if (bufAfterLogin != null) {
        wsConn.sendOnly(bufAfterLogin);
        bufAfterLogin = null;
    }
}

// SendData 发送消息
export function sendData(cmd: string, data: any) {
    let uid = getUserInfo().get("name");
    let headReq = _getHead(uid, cmd)
    // let dataJson = JSON.stringify(data);
    // console.log(`dataJson = ${dataJson}`);
    let dataBuf = dataToBuffer(data);
    let message = game.Msg.create({ head: headReq, data:  dataBuf});
    console.log(`message = ${JSON.stringify(message)}`);
    let buffer = game.Msg.encode(message).finish();
    // console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
    // console.log("buffer msg: ", buffer);

    if (wsConn.state() !== WebSocket.OPEN) {
        bufAfterLogin = buffer;
        login();
        return;
    }
    wsConn.sendOnly(buffer);
}

// msgHandler 服务器消息处理
export function msgHandler(msgBuffer: any) {
    // console.log("handler msg: ", msgBuffer);
    // console.log(`buffer = ${Array.prototype.toString.call(msgBuffer)}`);
    let decoded = game.Msg.decode(msgBuffer);
    // game.Msg.bind
    // console.log(`decoded = ${JSON.stringify(decoded)}`);
    let head = decoded.head;
    if (head.code !== 0) {
        console.error("msg.code is failed: ", decoded.head)
        return  // 失败消息不处理
    }
    let msgData = bufferToData(decoded.data);
    // console.log("data: ", msgData);

    let funcName = head.cmd;
    console.log("func: <", funcName, ">");
    console.log("msg:", msgData);
    let handFunc = getHandler(funcName).func;
    let clsIns = getHandler(funcName).cls
    let rspMsg = handFunc(clsIns, msgData);
    console.log("res:", rspMsg);
}

function bufferToData(buffer: Uint8Array): any {
    let dataJson = new TextDecoder("utf-8").decode(buffer);
    return JSON.parse(dataJson);
    // return String.fromCharCode.apply(null, Array.from(new Uint8Array(buffer)));
}

function dataToBuffer(value: any): Uint8Array {
    let dataBuf = new TextEncoder("utf-8").encode(JSON.stringify(value));
    return dataBuf;
    // let buffer = new Uint8Array(value.length);
    // for (let i = 0, length = value.length; i < length; i++) {
    //     buffer[i] = value.charCodeAt(i);
    // }
    // return buffer;
}