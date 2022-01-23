
const { ccclass, property } = cc._decorator;

@ccclass
export default class JoyStick extends cc.Component {

    @property(cc.Node)
    stick: cc.Node = null;

    @property
    maxR: number = 150;

    @property
    minR: number = 20;

    public dir: cc.Vec2 = cc.v2(0, 0);

    onLoad() {
        this.stick.setPosition(cc.v2(0, 0));
        this.stick.on(cc.Node.EventType.TOUCH_MOVE, this._onStickMove, this);
        this.stick.on(cc.Node.EventType.TOUCH_END, this._onStickEnd, this);
        this.stick.on(cc.Node.EventType.TOUCH_CANCEL, this._onStickEnd, this);
    }

    start() {

    }

    // update (dt) {}

    _onStickMove(e: cc.Touch): void {
        let screen_pos: cc.Vec2 = e.getLocation();  // 获取屏幕触摸点
        let pos: cc.Vec2 = this.node.convertToNodeSpaceAR(screen_pos);
        var len: number = pos.mag();
        this.dir.x = pos.x / len;  // cos
        this.dir.y = pos.y / len;  // sin
        // console.log("direct: ", this.dir);
        if (len > this.maxR) {
            pos.x = pos.x * this.maxR / len;
            pos.y = pos.y * this.maxR / len;
        }
        this.stick.setPosition(pos);
    }

    _onStickEnd(e: cc.Touch): void {
        // console.log("touch end");
        this.dir = cc.v2(0, 0);
        this.stick.setPosition(cc.v2(0, 0));
    }
}
