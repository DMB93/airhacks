class MiniCode extends HTMLElement { 

    constructor() { 
        super();
        this.innerText = "hey joe";
    }

}

customElements.define('mini-code',MiniCode);


