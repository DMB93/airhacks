class FormView { 
    constructor() { 
        this.form = document.querySelector("form");
        this.form.onsubmit = e => this.onMySubmit(e);
        this.lastNameText = document.querySelectorAll("input");
        this.output = document.querySelector("output");
    }

    onMySubmit(event) { 
        event.preventDefault();
        console.log(event);
        console.dir(this.lastNameText);
        this.output.innerText = 'sbmitted';
    }
}



window.formView = new FormView();