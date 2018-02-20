customElements.whenDefined('mini-code').
    then(_ => {
    const component = document.querySelector("mini-code");
        component.power = "blue";
        component.addEventListener('exploded', e => console.log(e));
    console.log('..');
});