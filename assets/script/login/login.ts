
import { wxLogin } from '../login/wxlogin'
import { setUserInfo } from '../util/user/userinfo';
import { login } from '../session/connmgr';

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
            console.log("login from wx: ", userInfo);
            setUserInfo({ "avatar": userInfo.avatarUrl, "name": userInfo.nickName })
            login();
        }, function failed() {
            console.log("login from wx failed");
        });
    }

    loginFromGuest(params: any) {
        let userInfo = {
            "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/GN8sA5AThzrvobA4UD8PTpqFJ7cBfcSVfMZWaDALj4yibQ0OWefmR2JoggLR51u8WY6QLBDEboEgib90hMy17wEQ/132",
            "name": "游客-"
        }
        userInfo.name = userInfo.name + String(new Date().getTime());
        console.log("login from guest: ", userInfo);
        setUserInfo({ "avatar": userInfo.avatar, "name": userInfo.name });
        login();
    }
}
