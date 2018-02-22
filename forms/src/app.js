class FormView { 
    constructor() { 
        this.form = document.querySelector("form");
        this.form.onsubmit = e => this.onMySubmit(e);
        this.lastNameText = document.querySelectorAll("input");
    }

    onMySubmit(event) { 
        event.preventDefault();
        console.log(event);
        console.dir(this.lastNameText);

        this.lastNameText.forEach(e => console.log(e.value));
    }
}



new FormView();