import { html, render } from './lit-html.js';

class ATimer extends HTMLElement { 

    constructor() { 
        super();
        this.innerText = "hugo";
        this._counter = 0;
        this.root = this.attachShadow({mode:'open'});
    }

    connectedCallback() { 
        const timeout = this.getAttribute('timeout');
        setInterval(_ => this.update(), timeout);
        render(this.template(),this.root);
    }

    template() { 
        return html`
            <h2>timer</h2>
            <output>${this.counter}</output>
        `;
    }

    static hugo() { 
        return 'a-timer';
    }

    update() { 
        this.counter++;
    }

    set counter(cnt) { 
        render(this.template(),this.root);
        this._counter = cnt;
    }

    get counter() { 
        return this._counter;
    }


}

customElements.define(ATimer.hugo(),ATimer);



