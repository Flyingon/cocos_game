
import { getHandler } from "./handler";

const heartPing = "ping"
const heartPong = "pong"

class CWsConn {
    private _webSocket: WebSocket;
    intervalTime = 5000;

    Conn() {
        return this._webSocket
    }

    NewConn(url: string, data: any) {
        this._webSocket = new WebSocket(url);
        var self = this
        this._webSocket.onopen = function name() {
            self._sendHeart();
            if (data != null) {
                self._webSocket.send(data);
            }
        }

        this._webSocket.onmessage = function (event) {
            // console.log("ws msg received:", event);
            if (event.data == heartPong) {
                console.log("heartPong get");
                return
            }
            let reqMsg = JSON.parse(event.data);
            if (reqMsg.return_code != 0) {
                console.error("reqMsg:", reqMsg);
                return
            }
            let funcName = reqMsg.cmd;
            // console.log("func: <", funcName, ">");
            // console.log("reqMsg:", reqMsg);
            let handFunc = getHandler(funcName).func;
            let clsIns = getHandler(funcName).cls
            let rspMsg = handFunc(clsIns, reqMsg);
            // console.log("rspMsg:", rspMsg);
        };

        this._webSocket.onclose = function (event) {
            console.log("WebSocket message close:", event);
        };
    }

    _sendHeart() {
        setInterval(() => {
            this._webSocket.send(heartPing);
        }, this.intervalTime);
    }

    SendOnly(data: any) {
        this._webSocket.send(data);
    }


    Send(data: any, callback: any) {
        this._webSocket.onmessage = callback;
        this._webSocket.send(data);
    }
}

export var WsConn = new CWsConn();
