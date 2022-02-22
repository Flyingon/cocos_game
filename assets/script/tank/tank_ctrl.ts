import { sendData } from "../session/connmgr";
import { gameClt } from "./game";
import { registerHandler } from "../session/handler";
import { getUserInfo } from "../util/user/userinfo";

const cmdM1 = "move"
const cmdM2 = "m2"
var cmdMove = cmdM2

const { ccclass, property } = cc._decorator;

import JoyStick from "./joystick";
import { game } from "../proto/compiled";

interface TankObj {
    ts: number, f: number, tankNode: cc.Node, tankBody: cc.RigidBody
}

@ccclass
export default class TankCtrl extends cc.Component {

    @property(JoyStick)
    stick: JoyStick = null;

    @property
    speed: number = 200;

    // @property(cc.Node)
    camera: cc.Node = null;
    private body: cc.RigidBody = null;
    private offset: cc.Vec2 = cc.v2(0, 0);
    // private frameNum : number = 0;

    @property(cc.Node)
    tankTpl: cc.Node = null;
    private _tankList: Map<string, TankObj> = new Map(); 

    onLoad() {
        registerHandler(cmdM1, this, this.moveCb);
        registerHandler(cmdM2, this, this.move2Cb);
        this.body = this.getComponent(cc.RigidBody);
    }

    start() {
        if (this.camera !== null) {
            this.offset = this.camera.getPosition().sub(this.node.getPosition());
        }
    }

    update(deltaTime: number) {
        let curFrame = gameClt.incrCltFrame(1);
        this.frameHandler(curFrame);
        // 主摄像机跟随
        if (this.camera !== null) {
            // this.camera.setPosition(this.node.getPosition());
            this.camera.x = this.node.x + this.offset.x;
            this.camera.y = this.node.y + this.offset.y;
        }
        // tank响应操作
        // this.tankMove(this.node, this.body, this.stick.dir.x, this.stick.dir.y);
    
        // 数据同步给后台
        if (cmdMove === "move") {
            sendData(cmdMove, {
                "x": this.node.x,
                "y": this.node.y,
                "d": this.node.angle,
                "f": gameClt.getCltFrame(),
            });
        } else if (cmdMove === "m2") {
            sendData(cmdMove, {
                "x": this.stick.dir.x,
                "y": this.stick.dir.y,
            });
        }

        // console.log("tank to [mine]: ", this.node.x, this.node.y, this.node.angle);
    }

    frameHandler(frameNum:number) {
        let frameData = gameClt.getFrameList(frameNum);
        if (frameData != null) {
            // console.log("frame[" + frameNum + "].data: ");
            for (let uid in frameData) {
                // console.log("AAAA: ", frameNum, uid, frameData[uid]);
                if (getUserInfo().get("name") == uid ) {  // 自己的tank跳过
                    this.tankMove(this.node, this.body, frameData[uid].x, frameData[uid].y);
                } else {
                    this._syncTankAction(uid, frameData[uid].x, frameData[uid].y);
                }

            }
        }
    }

    tankMove(tankNode: cc.Node, tankBody: cc.RigidBody, x: number, y: number) {
        // console.log("tank pos: ", this.node.getPosition());
        // 当stick是0的时候，设置速度是0
        if (x === 0 && y === 0) {
            tankBody.linearVelocity = cc.v2(0, 0);
            return;
        }

        // 设置速度
        let vx: number = this.speed * x;
        let vy: number = this.speed * y;
        // console.log("speed: ", vx, vy);
        tankBody.linearVelocity = cc.v2(vx, vy);

        // tank头的方向
        let r: number = Math.atan2(y, x);
        let degree: number = r * 180 / Math.PI;
        degree = degree - 180;
        tankNode.angle = degree;
    }

    onBeginContact(contact: any, selfCollider: any, otherCollider: any | null) {
        // 只在两个碰撞体开始接触时被调用一次
        console.log('onBeginContact');
    }

    onEndContact(contact: any, selfCollider: any, otherCollider: any | null) {
        // 只在两个碰撞体结束接触时被调用一次
        console.log('onEndContact');
    }
    onPreSolve(contact: any, selfCollider: any, otherCollider: any | null) {
        // 每次将要处理碰撞体接触逻辑时被调用
        console.log('onPreSolve');
    }
    onPostSolve(contact: any, selfCollider: any, otherCollider: any | null) {
        // 每次处理完碰撞体接触逻辑时被调用
        console.log('onPostSolve');
        // console.log('onPostSolve',
        // "selfCollider: ", selfCollider, 
        // "otherCollider: ", otherCollider,
        // "contact: ", contact,
        // );
        selfCollider.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
        otherCollider.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
    }

    // move消息同步tank移动
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
    // m2消息同步tank移动
    move2Cb(cls: any, msg: any) {
        // console.log("cmd[" + cmdM2 + "].msg: ", msg);
        let frames = msg.frame_list;
        let curFrame:number = msg.cur_frame;
        gameClt.syncFrameOnce(curFrame);
        for (let f in frames) {
            gameClt.setFrameList(Number(f), frames[f])
        }
    }
    // _getTank 获取或新建相应的tank
    _getTank(tankName: string) {
        let tank: TankObj = this._tankList.get(tankName);
        // 没有tank新建
        if (tank == null) {
            let tankNode = cc.instantiate(this.tankTpl);
            let tankBody = tankNode.getComponent(cc.RigidBody);
            tankNode.name = tankName;
            cc.director.getScene().addChild(tankNode);
            tank = {
                ts: 0,
                tankNode: tankNode,
                tankBody: tankBody,
                f: 0,
            }
            tank.tankNode.setPosition(cc.v2(631.122, 388.678));  // TODO 暂时先设置为中间出生点
            this._tankList.set(tankName, tank);
            console.log(
                "new tank: ", tank,
                "tank list: ", this._tankList,
                "scence: ", cc.director.getScene()
            );
        }
        return tank;
    }

    // 同步一个tank操作
    _syncTankAction(tankName: string, x: number, y: number) {
        let tank = this._getTank(tankName);
        // console.log("tanktanktank: ", tank);
        this.tankMove(tank.tankNode, tank.tankBody, x, y);
    }

    // 同步一个tank的位置
    _syncTankPos(tankName: string, x: number, y: number, d: number, ts: number) {
        let tank = this._getTank(tankName);
        // console.log("tanktanktank: ", tank);
        if (ts > tank.ts) {
            tank.ts = ts;
            console.log("tank[" + tank.tankNode.name + "][" + tank.ts + "] to: ", x, y, d);
            tank.tankNode.setPosition(cc.v2(x, y));
            tank.tankNode.angle = d;
        }
    }
}
