import { setUserInfo, getUserInfo } from "../util/user/userinfo";
import { login, sendData } from "../session/connmgr";
import { registerHandler } from "../session/handler";

const { ccclass, property } = cc._decorator;

const cmdCreateRoom = "create_room";
const cmdJoinRoom = "join_room";

@ccclass
export default class TankHall extends cc.Component {

    @property(cc.Node)
    UserInfo: cc.Node = null;

    @property(cc.Component)
    inputRoomID: cc.EditBox = null;

    onLoad() {
        registerHandler(cmdCreateRoom, this, this.createRoomCb);
        registerHandler(cmdJoinRoom, this, this.joinRoomCb);
        this._showUserInfo();
        login();
    }

    start() {
    }

    _showUserInfo() {
        let userInfo = getUserInfo();
        // console.log("show userinfo: ", userInfo);
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

    // 进入游戏
    enterGame() {
        let roomID = 0;
        if (this.inputRoomID.string !== "") {
            roomID = Number(this.inputRoomID.string);
        }
        console.info("input room id: ", roomID);
        if (roomID <= 0) {
            console.warn("input room id is not valid");
            return
        }
        this.joinRoom(roomID.toString());

    }

    // 创建房间
    createRoom() {
        sendData(cmdCreateRoom, { "a": "a" });
    }
    // 创建房间返回
    createRoomCb(cls: any, msg: any) {
        console.log("cmd[" + cmdCreateRoom + "].rsp: ", msg)
    }

    // 加入房间
    joinRoom(roomId: string) {
        let userInfo = getUserInfo();
        let name = userInfo.get("name");
        let avatarUrl = userInfo.get("avatar");
        sendData(cmdJoinRoom, { "rid": roomId, "name": name, "avatar": avatarUrl });
    }
    // 加入房间返回
    joinRoomCb(cls: any, msg: any) {
        console.log("cmd[" + cmdJoinRoom + "].rsp: ", msg)
        setUserInfo({ "room_info": msg.data });
        cc.director.loadScene('scene/tank/tank');
    }
}