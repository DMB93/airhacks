
export default class CalculationOutput extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({mode:'open'});
    }

    connectedCallback() { 
        this.root.innerHTML = this.template();
        this.output = this.root.querySelector("output");
    }

    set result(result) { 
        if (this.output) { 
            this.output.innerText = result || '!!!' ;
        }
    }

    template() { 
        return `<output>...</output>`;
    }
}

customElements.define('calc-output',CalculationOutput);