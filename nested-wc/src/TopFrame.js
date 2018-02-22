import CalculationInput from './CalculationInput.js';
class TopFrame extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() { 

    }

}

customElements.define('top-frame',TopFrame);



