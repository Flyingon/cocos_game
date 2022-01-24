
const { ccclass, property } = cc._decorator;

@ccclass
export default class EnablePhy extends cc.Component {

    @property(cc.Vec2)
    gravity: cc.Vec2 = cc.v2(0, - 320);  // 引擎默认重力

    @property
    isDebug: boolean = false;  // 是否打来调试区域

    // 开启物理引擎，一定要写到onload里面
    onLoad() {
        // step1 开启物理引擎
        cc.director.getPhysicsManager().enabled = true;
        // step2 配置物理引擎重力
        cc.director.getPhysicsManager().gravity = this.gravity;
        // step3 配置调试区域
        if (this.isDebug) {
            var Bits: any = cc.PhysicsManager.DrawBits;
            cc.director.getPhysicsManager().debugDrawFlags = Bits.e_aabbBit |
                Bits.e_pairBit |
                Bits.e_centerOfMassBit |
                Bits.e_jointBit |
                Bits.e_shapeBit;
        } else {
            cc.director.getPhysicsManager().debugDrawFlags = 0;
        }

    }

    start() {

    }

    // update (dt) {}
}
