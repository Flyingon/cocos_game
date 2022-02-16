
import { msgHandler } from "./connmgr";

const heartPing = "ping"
const heartPong = "pong"

class CWsConn {
    private _webSocket: WebSocket;
    intervalTime = 5000;

    conn() {
        return this._webSocket
    }

    state(): number {
        return this._webSocket.readyState
    }

    newConn(url: string, data: any) {
        this._webSocket = new WebSocket(url);
        var self = this
        this._webSocket.onopen = function name() {
            self._sendHeart();
            // console.log("CCCCCC: ", data);
            self._webSocket.send(data);
        }
        this._webSocket.onmessage = function (event) {
            if (event.data == heartPong) {
                console.log("heartPong get");
                return
            }
            // console.log("ws msg received:", event.type, event.data, typeof (event.data));
            if (window["wx"] != null) {  // 微信小游戏
                let arr8 = new Uint8Array(event.data);
                msgHandler(arr8);
            } else if (event.data instanceof Blob) {  // web
                let arrayBuffer:any;
                let fileReader = new FileReader();
                fileReader.onload = function (event) {
                    arrayBuffer = event.target.result;
                    let arr8 = new Uint8Array(arrayBuffer);
                    msgHandler(arr8);
                };
                fileReader.readAsArrayBuffer(event.data);
            };
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

    sendOnly(data: any) {
        this._webSocket.send(data);
    }


    send(data: any, callback: any) {
        this._webSocket.onmessage = callback;
        this._webSocket.send(data);
    }
}

export var wsConn = new CWsConn();
