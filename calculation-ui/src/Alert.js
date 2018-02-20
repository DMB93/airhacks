export default class Alert { 

    constructor() { 
        this.ws = new WebSocket('ws://localhost:8080/calculation/notifications');
        this.ws.onopen = e => console.log(e);
        this.ws.onmessage = e => this.onMessage(e);
    }

    onMessage({ data }) { 
        console.log(data);
    }
    send(msg) { 
        this.ws.send(msg);
    }
}