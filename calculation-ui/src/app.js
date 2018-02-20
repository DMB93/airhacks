class CalculationView { 

    constructor() { 
        this.small = document.querySelector("small");
        this.inputText = document.querySelector("input");
        this.button = document.querySelector("button");
        this.button.onclick = () => this.something();
        console.dir(this.inputText);
        this.inputText.onchange = e => this.small.innerText = e.target.value;
    }

    something() { 
        const p = document.createElement("div");
        p.innerText = "new";
        this.small.appendChild(p);
    }

}


window.view = new CalculationView();