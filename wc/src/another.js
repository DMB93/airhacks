customElements.whenDefined('mini-code').
    then(_ => {
    const component = document.querySelector("mini-code");
        component.power = "blue";
    console.log('..');
});