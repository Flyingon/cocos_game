
import { registerHandler } from "../session/handler";
import { getUserInfo } from "../util/user/userinfo";

const cmdMove = "move"

const { ccclass, property } = cc._decorator;

@ccclass
export default class TankMgr extends cc.Component {

    @property(cc.Node)
    tankTpl: cc.Node = null;

    private _tankList = new Map();
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        registerHandler(cmdMove, this, this.moveCb);
    }

    start() {
        console.log(
            "user: ", getUserInfo().get("name"),
            "init.scence: ", cc.director.getScene());
    }

    update(dt: any) {
        // console.log("self tank: ", this.selfTank.anchorX, this.selfTank.anchorY);
    }

    // 加入房间返回
    moveCb(cls: any, msg: any) {
        console.log("cmd[" + cmdMove + "].msg: ", msg);
        let userInfo = getUserInfo()
        let tanks = msg.tanks;
        for (let i = 0; i < tanks.length; i++) {
            if (userInfo.get("name") == tanks[i].uid) {
                continue  // 自己的tank
            }
            cls._syncTankPos(tanks[i].uid, tanks[i].x, tanks[i].y, tanks[i].d, tanks[i].t);
        }
    }
    // 新建一个tank
    _getTank(tankName: string) {
        let tank = this._tankList.get(tankName);
        // 没有tank新建
        if (tank == null) {
            let tankNode = cc.instantiate(this.tankTpl);
            tankNode.name = tankName;
            cc.director.getScene().addChild(tankNode);
            tank = {
                ts: 0,
                node: tankNode,
            }
            this._tankList.set(tankName, tank);
            console.log(
                "new tank: ", tank,
                "tank list: ", this._tankList,
                "scence: ", cc.director.getScene()
            );
        }
        return tank;
    }
    // 同步一个tank的位置
    _syncTankPos(tankName: string, x: number, y: number, d: number, ts:number) {
        let tank = this._getTank(tankName);
        console.log("tanktanktank: ", tank);
        if (ts > tank.ts) {
            tank.ts = ts;
            console.log("tank[" + tank.node.name + "][" + tank.ts +"] to: ", x, y, d);
            tank.node.setPosition(cc.v2(x, y));
            tank.node.angle = d;
        }
    }
}
