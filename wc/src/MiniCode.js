class MiniCode extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({mode:'open'});
    }

    connectedCallback() { 
        this.root.innerHTML = `
        <style>
            h1{
                background: green;
            }
        </style>
            <div>hello</div>
            `
    }
    static get observedAttributes() {
        return ["power"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name,oldValue,newValue);
    }

    set power(pwr) { 
        this.setAttribute('power', pwr);
    }

}

customElements.define('mini-code',MiniCode);


