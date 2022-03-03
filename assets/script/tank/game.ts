const frameInterval = 10;

// Frame 帧结构
interface Frame {
    num: number,   // 帧号
    data: any   // 数据
}


class GameClt {
    private lastSyncTs: number = 0;  // 上次同步时间
    private cltFrameNum: number = 0;  // 客户端帧数
    private svrFrameNum: number = 0;  // 服务端帧数
    private frameList: Map<Number, any> = new Map; // 帧队列 
    private playFrameNum: number = 0;  // 帧播放位置
    // private frameList: Array<Frame> = new Array; // 帧队列 

    private frameSpeed: number = 1;  // 帧播放速度，每次执行几个

    // syncFrame 和后台帧同步
    syncFrame(svrFrame: number) {
        this.svrFrameNum = svrFrame;
        this.playFrameNum = svrFrame - frameInterval;
        this.lastSyncTs = new Date().getTime();
    }

    // syncFrameOnce 和后台帧同步且仅同步一次
    syncFrameOnce(svrFrame: number) {
        if (this.lastSyncTs <= 0) {
           this.syncFrame(svrFrame);
        } 
    }

    setSvrFrame(svrFrameNum: number) {
       this.svrFrameNum = svrFrameNum;
    }

    getSvrFrameNum():number {
        return this.svrFrameNum;
     }
 
    getCltFrameNum(): number {
        return this.cltFrameNum;
    }

    getPlayFrameNum(): number {
        return this.playFrameNum;
    }

    incrCltFrame(num: number):number{
        this.cltFrameNum++;
        return this.cltFrameNum;
    }

    setFrameList(f: number, data: any) {
        let frame: Frame = {
            num: f,
            data: data,
        };
        // this.frameList.push(frame);
        this.frameList[f] = frame;
    }

    getNextFrame() {
        let frame = this.frameList[this.playFrameNum];
        this.playFrameNum ++;
        return frame;
    }

    getNextFrames() {
        let ret = new Array();
        for (let i = 0; i < this.frameSpeed; i ++) {
            let frame = this.getNextFrame();
            // if (frame == null) {
            //     continue;
            // }
            ret.push(frame);
        }
        // console.log("[getNextFrames] svrFrame: ", this.svrFrameNum, "playFrame: ", this.playFrameNum, "speed: ", this.frameSpeed, "ret: ", ret)
        return ret;
    }

    adjustSpeed() {
        console.log("[adjustSpeed] svrFrame: ", this.svrFrameNum, "playFrame: ", this.playFrameNum, "speed: ", this.frameSpeed, "delta: ", this.svrFrameNum - this.playFrameNum);
        if (this.svrFrameNum - this.playFrameNum > frameInterval) { // 慢了，加速追帧
            if  (this.frameSpeed < 3) {
                this.frameSpeed ++;
            }
        } else {  // 快了，减速
            if (this.frameSpeed > 0) {
                this.frameSpeed --;
            }
        }
    }

    getFrameList(f: number):Frame {
        return this.frameList[f];
    }
}

export var gameClt = new GameClt;