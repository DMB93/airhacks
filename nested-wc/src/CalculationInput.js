export default class CalculationInput extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.calculate = this.calculate.bind(this);
        CalculationInput.EVENT_NAME = 'result';
    }

    connectedCallback() { 
        this.root.innerHTML = this.template();
        this.registerListeners();
    }

    registerListeners() { 
        this.a = this.root.querySelector("#a");
        this.b = this.root.querySelector("#b");
        const submit = this.root.querySelector("button");
        submit.onclick = this.calculate;
    }

    calculate() { 
        const a = this.a.value;
        const b = this.b.value;
        console.log(a, b);
        const c = Number.parseInt(a) * Number.parseInt(b);
        
        const event = new CustomEvent(CalculationInput.EVENT_NAME, {
            detail: {
                calculation: c
            }
        });
        this.dispatchEvent(event);
    }

    template() { 
        return `
        <input type="text" id="a"/>
        <input type="text" id="b"/>
        <button>submit</button>
        `;

    }

}

customElements.define('calc-input',CalculationInput);