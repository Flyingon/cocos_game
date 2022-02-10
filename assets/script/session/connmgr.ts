
import { wsConn } from "./conn";
import { getHandler } from "./handler";
import { game } from "../proto/compiled";
import { cfg } from "../cfg/cfg"

function _getHead(uid: string, cmd: string) {
    return game.MsgHead.create({ uid: uid, cmd: cmd, type: 2, sId: "game", iId: "192.168.255.10" })
}

// login 新建链接并登陆
export function login(dataAfterLogin: any) {
    let headReq = _getHead("1", "login");
    let dataJson = JSON.stringify({});
    let message = game.Msg.create({ head: headReq, data: stringToBuffer(dataJson) });
    console.log(`message = ${JSON.stringify(message)}`);
    let loginBuf = game.Msg.encode(message).finish();
    // console.log(`loginBuf = ${Array.prototype.toString.call(loginBuf)}`);
    let bufList = [loginBuf];
    if (dataAfterLogin != null) {
        bufList.push(dataAfterLogin)
    }
    wsConn.newConn(cfg.localvrWS, bufList);
}

// SendData 发送消息
export function sendData(cmd: string, data: any) {
    let headReq = _getHead("1", cmd)
    let dataJson = JSON.stringify(data);
    let message = game.Msg.create({ head: headReq, data: stringToBuffer(dataJson) });
    console.log(`message = ${JSON.stringify(message)}`);
    let buffer = game.Msg.encode(message).finish();
    // console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
    // console.log("buffer msg: ", buffer);

    if (wsConn.state() !== WebSocket.OPEN) {
        login(buffer);
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
    console.log(`decoded = ${JSON.stringify(decoded)}`);
    let head = decoded.head;
    if (head.code !== 0) {
        console.error("msg.code is failed: ", decoded.head)
        return  // 失败消息不处理
    }
    let msgData = bufferToString(decoded.data);
    console.log("data: ", msgData);

    let funcName = head.cmd;
    console.log("func: <", funcName, ">");
    console.log("reqMsg:", msgData);
    let handFunc = getHandler(funcName).func;
    let clsIns = getHandler(funcName).cls
    let rspMsg = handFunc(clsIns, msgData);
    console.log("rspMsg:", rspMsg);
}

function bufferToString(buffer: Uint8Array): string {
    return String.fromCharCode.apply(null, Array.from(new Uint8Array(buffer)));
}

function stringToBuffer(value: string): Uint8Array {
    let buffer = new Uint8Array(value.length);
    for (let i = 0, length = value.length; i < length; i++) {
        buffer[i] = value.charCodeAt(i);
    }
    return buffer;
}