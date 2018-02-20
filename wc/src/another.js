customElements.whenDefined('mini-code').
    then(_ => {
    const component = document.querySelector("mini-code");
    component.setAttribute("power", "blue");
    console.log('..');
});