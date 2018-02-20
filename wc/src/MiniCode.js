class MiniCode extends HTMLElement { 

    constructor() { 
        super();
        
    }

    connectedCallback() { 
        this.innerText = "hey joe " + this.getAttribute("power");
    }
    static get observedAttributes() {
        return ["power"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name,oldValue,newValue);
    }

}

customElements.define('mini-code',MiniCode);


