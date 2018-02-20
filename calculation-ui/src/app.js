const small = document.querySelector("small");
console.dir(small);

small.innerText = "hugo";
const dynamic = "something"
const java = document.querySelector("#java");
java.innerHTML = `<p>
${dynamic}
</p>
`;



