const divEl = document.createElement('div');
console.log(divEl);
divEl.className = 'main';
divEl.id = Math.random() * 10;
divEl.setAttribute('title', 'generated title');
divEl.style.backgroundColor = 'green';
divEl.style.padding = '12px';
divEl.style.textAlign = 'center'
// divEl.innerText = 'DOM DIV';
const addText = document.createTextNode('DOM LEARNING');
divEl.appendChild(addText);

document.body.appendChild(divEl)