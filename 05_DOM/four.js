function addLanguage(landName){
    const li = document.createElement('li');
    li.innerHTML = `${landName}`
    document.querySelector('.language')
    .appendChild(li);
}

addLanguage('python');
addLanguage('typescript')

function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}
addOptiLanguage('golang')

// Edit
const secondLang = document.querySelector('li:nth-child(2');
// secondLang.replaceWith(document.createTextNode('mojo'));
// const newSecondLang = secondLang.innerHTML = 'mojo'
// console.log(newSecondLang)


const newLi = document.createElement('li');
newLi.textContent = 'Mojo'
secondLang.replaceWith(newLi)

// Edit
const firstLang = document.querySelector('li:nth-child(1)');
firstLang.outerHTML = '<li>TypeScript</li>'

//remove
const lastLang = document.querySelector('li:last-child');
lastLang.remove()