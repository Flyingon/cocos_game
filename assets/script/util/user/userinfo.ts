
var _userInfo = new Map();

export function SetUserInfo(data: any) {
    for (let key in data) {
        let value = data[key];
        _userInfo.set(key, value);
    }
}

export function GetUserInfo() {
    return _userInfo;
}
