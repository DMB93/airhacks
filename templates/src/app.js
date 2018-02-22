class ActiveVehicle extends HTMLElement {
    constructor() { 
        super();
        this.root = this.attachShadow({ mode: 'open' });
        
    }

    connectedCallback() { 
        setInterval(_=>this.update(),1000);
    }

    update() { 
        const time = new Date();
        this.root.appendChild(this.hugo());
    }

    hugo() { 
        if (!ActiveVehicle.template) {
            ActiveVehicle.template = document.createElement('template');
            ActiveVehicle.template.innerHTML = `
        <section>
        <output>
          hey duke
        </output>
        </section>        
        `;
        }    
        return ActiveVehicle.template.content.cloneNode(true);
    }
}

customElements.define('active-vehicle',ActiveVehicle);



