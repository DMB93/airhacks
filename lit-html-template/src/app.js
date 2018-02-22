import { html, render } from './lit-html.js';

const parameter = new Date();
const another = "hello"

const headers = ['first','next','last'];

const header = html`
${headers.map(s => html`<h2>${s}</h2>`)}`;
const result = html`
    ${header}
    <section>
        ${parameter}
        ${another}
    </section>
`;

const slot = document.querySelector('#output');

console.dir(result);

render(result,slot);



