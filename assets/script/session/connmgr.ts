
import { WsConn } from "../transport/websocket/conn";
import { game } from "../proto/compiled";
import {cfg} from "../cfg/cfg"


// NewConnAndLogin 新建链接并登陆
export function NewConnAndLogin() {
    let headReq = game.HeadReq.create({ uid: 1, cmd: "login", type: 2, sId: "game", iId: "192.168.255.10" })
    let message = game.MsgReq.create({ head: headReq, data: new Uint8Array(10) });
    console.log(`message = ${JSON.stringify(message)}`);
    let buffer = game.MsgReq.encode(message).finish();
    console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
    // let decoded = game.MsgReq.decode(buffer);
    // console.log(`decoded = ${JSON.stringify(decoded)}`);
    WsConn.NewConn(cfg.localvrWS, buffer);
}