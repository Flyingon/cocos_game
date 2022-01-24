import { SetUserInfo, GetUserInfo } from "../util/user/userinfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    UserInfo: cc.Node = null;

    onLoad () {
        this._showUserInfo();

    }

    start () {
    }

    // update (dt) {}

    _showUserInfo() {
        let userInfo = GetUserInfo();
        console.log("show userinfo: ", userInfo);
        let name = userInfo.get("name");
        let avatarUrl = userInfo.get("avatar");
    
        this.UserInfo.getChildByName("Name").getComponent(cc.Label).string = name;
        if (avatarUrl.length > 0) {
            var self = this;
            cc.assetManager.loadRemote(avatarUrl, { ext: '.png' }, function (err, texture) {
                if (err) {
                    console.error(err);
                    return;
                }
                let sf = new cc.SpriteFrame(texture);
                self.UserInfo.getChildByName("Avatar").getComponent(cc.Sprite).spriteFrame = sf;
            });
        }
    }

    EnterTankGame() {
        cc.director.loadScene('scene/tank');
    }
}
