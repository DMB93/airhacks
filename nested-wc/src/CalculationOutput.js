
export default class CalculationOutput extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({mode:'open'});
    }

    connectedCallback() { 
        this.root.innerHTML = this.template();
        this.output = this.root.querySelector("output");
        if(this.getAttribute('listen'))
            document.body.addEventListener('result', e => this.result = e.detail.calculation);
    }

    set result(result) { 
        if (this.output) { 
            const msg = result || '!!!';
            if (msg === '!!!')
                this.setAttribute('invalid', true);
            else
                this.removeAttribute('invalid');    
            this.output.innerText = msg;
            this.setAttribute('result',msg);
        }
    }

    template() { 
        return `<output>...</output>`;
    }
}

customElements.define('calc-output',CalculationOutput);