
var _userInfo = new Map();

export function setUserInfo(data: any) {
    for (let key in data) {
        let value = data[key];
        _userInfo.set(key, value);
    }
}

export function getUserInfo() {
    return _userInfo;
}
