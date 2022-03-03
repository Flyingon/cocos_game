
var cfg = {
    localvrWS: "ws://127.0.0.1:8080/ws_game_svr/gate/ws",
    testSvrWS: "wss://www.yuanzhaoyi.cn/ws_game_svr/gate/ws", // "wss://res.yuanzhaoyi.cn/ws_game_svr/gate/ws"
    prodSvrWS: "",
}

export const defineIID = "119.29.207.141" // "119.29.207.141" // "127.0.0.1"

export function getWsAddr() {
    return cfg.testSvrWS
}