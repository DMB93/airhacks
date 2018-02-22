import CalculationOutput from './CalculationOutput.js';
import CalculationInput from './CalculationInput.js';

class TopFrame extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() { 
        this.calcInput = new CalculationInput();
        this.calcOutput = new CalculationOutput();
        this.root.appendChild(this.calcOutput);
        this.root.appendChild(this.calcInput);
        document.body.addEventListener(CalculationInput.EVENT_NAME, e => this.onCalculationPerformed(e));

    }

    onCalculationPerformed({detail}) { 
        this.calcOutput.result = detail.calculation;
    }

}

customElements.define('top-frame',TopFrame);



