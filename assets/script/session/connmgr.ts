
import { wsConn } from "./conn";
import { getHandler, registerHandler } from "./handler";
import { getUserInfo } from "../util/user/userinfo";
import { game } from "../proto/compiled";
import { cfg } from "../cfg/cfg"

const cmdLogin = "login"

registerHandler(cmdLogin, this, loginCb);
var bufAfterLogin: any = null;

var svr = {
    sId: "tank",
    iId: "",
}


// 设置后台服务路由信息
export function setSvrID(sid: string, iId: string) {
    if (sid != null && sid.length > 0) {
        svr.sId = sid;
    }
    if (iId != null && iId.length > 0) {
        svr.iId = iId;
    }
    console.log("new svr: ", svr);
}

function _getHead(uid: string, cmd: string) {
    return game.MsgHead.create({
        uid: uid,
        cmd: cmd,
        type: 2,
        sId: svr.sId,
        iId: svr.iId,  // "119.29.207.141", //"192.168.255.10",
        seq: String(new Date().getTime())
    })
}

// login 新建链接并登陆
export function login() {
    let uid = getUserInfo().get("name");
    let headReq = _getHead(uid, "login");
    // let dataJson = JSON.stringify({});
    let dataBuf = dataToBuffer({});
    let message = game.Msg.create({ head: headReq, data: dataBuf });
    // console.log(`message = ${JSON.stringify(message)}`);
    let loginBuf = game.Msg.encode(message).finish();
    // console.log(`loginBuf = ${Array.prototype.toString.call(loginBuf)}`);
    if (window["wx"] != null) {  // *微信 将 Uint8Array 转换成 ArrayBuffer
        loginBuf = loginBuf.slice().buffer
    }
    wsConn.newConn(cfg.testSvrWS, loginBuf);
}
// loginCb 登陆回调
function loginCb(cls: any, msg: any) {
    console.log("cmd[" + cmdLogin + "].msg: ", msg);
    if (bufAfterLogin != null) {
        wsConn.sendOnly(bufAfterLogin);
        bufAfterLogin = null;
    }
    cc.director.loadScene('scene/tank/room');  // TODO是否直接进入游戏
}

// SendData 发送消息
export function sendData(cmd: string, data: any) {
    let uid = getUserInfo().get("name");
    let headReq = _getHead(uid, cmd)
    // let dataJson = JSON.stringify(data);
    // console.log(`dataJson = ${dataJson}`);
    let dataBuf = dataToBuffer(data);
    let message = game.Msg.create({ head: headReq, data: dataBuf });
    // console.log(`message = ${JSON.stringify(message)}`);
    let buffer = game.Msg.encode(message).finish();
    // console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
    // console.log("buffer msg: ", buffer);

    if (wsConn.state() !== WebSocket.OPEN) {
        bufAfterLogin = buffer;
        login();
        return;
    }
    if (window["wx"] != null) {  // *微信 将 Uint8Array 转换成 ArrayBuffer
        buffer = buffer.slice().buffer
    }
    wsConn.sendOnly(buffer);
}

// msgHandler 服务器消息处理
export function msgHandler(msgBuffer: any) {
    // console.log("handler msg: ", msgBuffer);
    // console.log(`buffer = ${Array.prototype.toString.call(msgBuffer)}`);

    let decoded: any = game.Msg.decode(msgBuffer);
    // game.Msg.bind
    // console.log(`decoded = ${JSON.stringify(decoded)}`);

    let head = decoded.head;
    if (head.code !== 0) {
        console.error("msg.code is failed: ", decoded.head)
        return  // 失败消息不处理
    }

    let msgData: any;
    if (decoded.data.length > 0) {
        msgData = bufferToData(decoded.data);
    }
    console.log(
        "head", head,
        "msg:", msgData
    );

    if (head.sId == null ||
        head.iId == null) {
        console.error("svr sid or iid is not vaild");
        return;
    }
    let funcName = head.cmd;
    if (svr.sId != head.sId || 
        svr.iId != head.iId) {
        setSvrID(head.sId, head.iId);
    }

    let handFunc = getHandler(funcName).func;
    let clsIns = getHandler(funcName).cls
    let rspMsg = handFunc(clsIns, msgData);
    // console.log("<" + funcName + ">res:", rspMsg);
}

function bufferToData(buffer: Uint8Array): any {
    let dataJson:string;
    if (window['wx'] != null) {  // 微信小游戏
        dataJson = decodeURIComponent(escape(String.fromCharCode(...buffer)));
    } else {
        dataJson = new TextDecoder("utf-8").decode(buffer);
    }
    return JSON.parse(dataJson);
}

function dataToBuffer(value: any): Uint8Array {
    let dataJson = JSON.stringify(value);
    let dataBuf:Uint8Array;
    if (window['wx'] != null) {  // 微信小游戏
        dataBuf = new Uint8Array(unescape(encodeURIComponent(dataJson)).split("").map(val => val.charCodeAt()));
    } else {
        dataBuf = new TextEncoder().encode(dataJson);
    }
    return dataBuf;
}