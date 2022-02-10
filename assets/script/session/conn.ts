
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

    newConn(url: string, dataList: any[]) {
        this._webSocket = new WebSocket(url);
        var self = this
        this._webSocket.onopen = function name() {
            self._sendHeart();
            if (dataList != null) {
                for (var i = 0; i < dataList.length; i++) {
                    self._webSocket.send(dataList[i]);
                }
            }
        }
        this._webSocket.onmessage = function (event) {
            if (event.data == heartPong) {
                console.log("heartPong get");
                return
            }
            // console.log("ws msg received:", event.type, event.data, typeof (event.data));
            if (event.data instanceof Blob) {
                let arrayBuffer;
                let fileReader = new FileReader();
                fileReader.onload = function (event) {
                    arrayBuffer = event.target.result;
                    let arr8 = new Uint8Array(arrayBuffer);
                    msgHandler(arr8);
                };
                fileReader.readAsArrayBuffer(event.data);
            }
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