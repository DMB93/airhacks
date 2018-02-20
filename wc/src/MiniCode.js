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

    set power(pwr) { 
        this.setAttribute('power', pwr);
        this.innerText = `super power: ${pwr}`;
    }

}

customElements.define('mini-code',MiniCode);


