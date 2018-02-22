export default class CalculationInput extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.calculate = this.calculate.bind(this);
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
        console.log('hugo');
        console.log(this.a.value,this.b.value);
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