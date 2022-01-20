/**
     * wx授权登陆
     * @param _success 登陆成功返回回调 第一个参数是wx用户信息
     * @param _fail 拒绝授权返回
     */
 export function wxLogin(_success: any, _fail:any) {
    //微信登陆
    const wx = window['wx'];//避开ts语法检测
    const info = wx.getSystemInfoSync();//立即获取系统信息
    const w = info.screenWidth;//屏幕宽
    const h = info.screenHeight;//屏幕高
    //获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
    wx.getSetting(
        {
            success(res:any) {
                console.log("wxAuthSetting: ", res.authSetting);
                if (res.authSetting["scope.userInfo"]) {
                    console.log("用户已授权");
                    wx.getUserInfo({
                        success(res:any) {
                            //登陆操作
                            _success && _success(res.userInfo);
                        }
                    });
                } else {
                    console.log("用户未授权");
                    //创建全屏透明登陆按钮
                    let button = wx.createUserInfoButton({
                        type: 'text',
                        text: '',
                        style: {
                            left: 0,
                            top: 0,
                            width: w,
                            height: h,
                            backgroundColor: '#00000000',//最后两位为透明度
                            color: '#ffffff',
                            fontSize: 20,
                            textAlign: "center",
                            lineHeight: h,
                        }
                    });

                    button.onTap((res:any) => {
                        if (res.userInfo) {
                            console.log("用户授权:", res.userInfo);
                            _success && _success(res.userInfo);
                            button.destroy();
                        } else {
                            console.log("用户拒绝授权:");
                            _fail && _fail();
                        }
                    });
                }

            }

        }
    );
}