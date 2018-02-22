class FormView { 
    constructor() { 
        this.form = document.querySelector("form");
        this.form.onsubmit = e => this.onMySubmit(e);
        this.lastNameText = document.querySelector("#lastName");
    }

    onMySubmit(event) { 
        event.preventDefault();
        console.log(event);
        
    }
}



new FormView();