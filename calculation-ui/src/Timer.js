export default class Timer { 

    constructor() { 
        this._secs = 1;
    }


    set timeout(secs) {
        this._secs = secs;

        this.configure();

    }

    configure(secs) { 
        setInterval(_ => console.log("."), this._secs);
    }

}