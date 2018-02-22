import CalculationOutput from './CalculationOutput.js';
import CalculationInput from './CalculationInput.js';

class TopFrame extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() { 
        this.calcInput = new CalculationInput();
        this.outputs = this.querySelectorAll('calc-output');
        this.outputs.
            forEach(o => this.root.appendChild(o));
        this.root.appendChild(this.calcInput);
        document.body.addEventListener(CalculationInput.EVENT_NAME, e => this.onCalculationPerformed(e));

    }

    onCalculationPerformed({ detail }) { 
        this.outputs.forEach(o => o.result = detail.calculation);
    }

}

customElements.define('top-frame',TopFrame);



