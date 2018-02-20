import CalculationLoader from './CalculationLoader.js';

class CalculationView { 

    constructor() { 
        this.small = document.querySelector("small");
        this.inputText = document.querySelector("input");
        this.button = document.querySelector("button");
        this.button.onclick = () => this.something();
        console.dir(this.inputText);
        this.inputText.onchange = e => this.small.innerText = e.target.value;

        this.loader = new CalculationLoader();
        this.loader.loadCalcs().then(calcs => console.log(calcs));
        blogger('hopefully logs');
    }

    something() { 
        const p = document.createElement("div");
        p.innerText = "new";
        p.setAttribute('name','duke');
        this.small.appendChild(p);
    }

    set name(name) { 
        console.log(name);

    }

    get name() { 
        return "hey joe";
    }

}


window.view = new CalculationView();

window.view.name = "chief";

console.log(window.view.name);