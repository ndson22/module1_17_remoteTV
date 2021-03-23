class Remote{
    constructor(code) {
        this.code = code;
    }
    changeTv(Tivi,channel){
        Tivi.channel = channel;
    }
    controlStatus(Tivi){
        if(Tivi.status == false){
            Tivi.status = true;
        }
        else Tivi.status = false;
    }
    controlVolumnUp(Tivi,volumn){
        Tivi.volumn +=volumn;
    }
    controlVolumnDown(Tivi,volumn){
        if(Tivi.volumn == 0){
            Tivi.volumn = 0;
        }
        else {Tivi.volumn -=volumn}
    }
}

class Tivi {
    constructor(channel) {
        this.channel = channel;
        this.volumn = 0;
        this.status = false;
    }
    controlChannel(channel){
        this.channel = channel;
    }
    controlVolumnUp(volumn){
        this.volumn += volumn;
        return this.volumn;
    }
    controlVolumnDown(volumn){
        this.volumn -=volumn;
        return this.volumn;
    }
}

let remote = new Remote(123);
let tivi = new Tivi(2);
remote.controlStatus(tivi);
console.log(tivi.status);
tivi.controlChannel(7);
console.log(tivi.channel);
remote.changeTv(tivi,3);
console.log(tivi.channel);
remote.controlVolumnUp(tivi,2);
console.log(tivi.volumn);
remote.controlStatus(tivi);
console.log(tivi.status);
