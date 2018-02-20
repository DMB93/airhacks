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
            <input placeholder=\'fill me\'></input>
            <button>hello</button>
            `;
        this.button = this.root.querySelector("button");
        const input = this.root.querySelector("input");
        this.button.onclick = _ => this.buttonPushed(input.value);
    }

    buttonPushed(value) { 
        console.log('...');
        const event = new CustomEvent("exploded", {
            detail: {
                mini: 'too fast',
                input: value
            }
        });
        this.dispatchEvent(event);

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


