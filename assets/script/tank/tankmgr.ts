
import { registerHandler } from "../session/handler";
import { getUserInfo } from "../util/user/userinfo";

const cmdMove = "move"

const { ccclass, property } = cc._decorator;

@ccclass
export default class TankMgr extends cc.Component {

    @property(cc.Node)
    tankTpl: cc.Node = null;

    private tankList = new Map();
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
            cls._syncTankPos(tanks[i].uid, tanks[i].x, tanks[i].y, tanks[i].d);
        }
    }
    // 新建一个tank
    _checkTank(tankName: string) {
        if (this.tankList.get(tankName) != null) {
            return;
        }
        // 没有tank新建
        let newTank = cc.instantiate(this.tankTpl);
        newTank.name = tankName;
        cc.director.getScene().addChild(newTank);
        this.tankList.set(tankName, newTank);
        console.log(
            "new tank: ", newTank,
            "tank list: ", this.tankList,
            "scence: ", cc.director.getScene()
        );
    }
    // 同步一个tank的位置
    _syncTankPos(tankName: string, x: number, y: number, d: number) {
        this._checkTank(tankName);
        let tank = this.tankList.get(tankName);
        if (tank != null) {
            console.log("tank to [" + tank + "]: ", x, y, d);
            tank.setPosition(cc.v2(x, y));
            tank.angle = d;
        }

    }
}
