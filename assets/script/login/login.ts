
import { wxLogin } from '../login/wxlogin'
import { SetUserInfo } from '../util/user/userinfo';

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}

    loginFromWechat(params: any) {
        /*
        avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/GN8sA5AThzrvobA4UD8PTpqFJ7cBfcSVfMZWaDALj4yibQ0OWefmR2JoggLR51u8WY6QLBDEboEgib90hMy17wEQ/132"
        city: ""
        country: ""
        gender: 0
        language: "zh_CN"
        nickName: "袁兆祎"
        province: ""
        */
        wxLogin(function sucess(userInfo: any) {
            console.log("login from wx success: ", userInfo);
            SetUserInfo({ "avatar": userInfo.avatarUrl, "name": userInfo.nickName })
            cc.director.loadScene('scene/hall');
        }, function failed() {
            console.log("login from wx failed");
        });
    }

    loginFromGuest(params: any) {
        let userInfo = {
            "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/GN8sA5AThzrvobA4UD8PTpqFJ7cBfcSVfMZWaDALj4yibQ0OWefmR2JoggLR51u8WY6QLBDEboEgib90hMy17wEQ/132",
            "name": "袁兆祎" 
        }
        console.log("login from guest success: ", userInfo);
        SetUserInfo({ "avatar": userInfo.avatar, "name": userInfo.name })
        cc.director.loadScene('scene/hall');
    }
}
