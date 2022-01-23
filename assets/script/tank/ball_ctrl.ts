
const {ccclass, property} = cc._decorator;

import JoyStick  from "./joystick";

@ccclass
export default class BallCtrl extends cc.Component {

    @property(JoyStick)
    stick: JoyStick = null;

    @property
    speed: number = 200;

    @property(cc.Node)
    camera: cc.Node = null;

    private body: cc.RigidBody = null;
    private offset: cc.Vec2 = cc.v2(0,0);

    onLoad () {
        this.body = this.getComponent(cc.RigidBody);
    }

    start () {
        if(this.camera !== null) {
            this.offset = this.camera.getPosition().sub(this.node.getPosition());
        }
    }

    update (dt:any) {
        if (this.camera !== null) {
            // this.camera.setPosition(this.node.getPosition());
            this.camera.x = this.node.x + this.offset.x;
            this.camera.y = this.node.y + this.offset.y;
        }
        if(this.stick.dir.x === 0 && this.stick.dir.y === 0) {
            this.body.linearVelocity = cc.v2(0,0);
            return;
        }

        let vx: number = this.speed * this.stick.dir.x;
        let vy: number = this.speed * this.stick.dir.y;
        // console.log("speed: ", vx, vy);
        this.body.linearVelocity = cc.v2(vx, vy);

        // tank头的方向
        let r: number = Math.atan2(this.stick.dir.y, this.stick.dir.x);
        let degree: number = r * 180 / Math.PI; 
        degree = degree - 180 ;
        this.node.angle = degree;
    }
}
