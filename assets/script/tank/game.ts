class GameClt {
    private lastSyncTs: number = 0;  // 上次同步时间
    private cltFrame: number = 0;  // 客户端帧数
    private svrFrame: number = 0;  // 服务端帧数
    private frameList: Map<Number, any> = new Map; // 帧队列

    // syncFrame 和后台帧同步
    syncFrame(svrFrame: number) {
        this.cltFrame = svrFrame;
        this.lastSyncTs = new Date().getTime();
    }

    // syncFrameOnce 和后台帧同步且仅同步一次
    syncFrameOnce(svrFrame: number) {
        if (this.lastSyncTs > 0) {
            this.cltFrame = svrFrame - 30;
            this.lastSyncTs = new Date().getTime();
        } 
    }

    getCltFrame(): number {
        return this.cltFrame;
    }

    setCltFrame(num: number) {
        this.cltFrame = num;
    }

    incrCltFrame(num: number):number{
        this.cltFrame++;
        return this.cltFrame;
    }

    setFrameList(f: number, data: any) {
        this.frameList[f] = data;
    }

    getFrameList(f: number) {
        return this.frameList[f];
    }
}

export var gameClt = new GameClt;