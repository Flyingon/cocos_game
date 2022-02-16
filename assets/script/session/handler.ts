
var _handlerMap = new Map();

export function registerHandler(name: string, cls: any, func: any) {
    console.log("registerHandler: ", name)
    _handlerMap.set(name, {
        "cls": cls,
        "func": func,
    });
}

export function getHandler(name: string) {
    return _handlerMap.get(name);
}
