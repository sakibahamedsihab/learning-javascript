const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

for(let i=0; i<parent.children.length; i++){
    // console.log(parent.children[i].innerHTML)
}

parent.children[1].style.color = 'orange'
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

const dayOne = document.querySelector('.day')
// console.log(dayOne.innerHTML)
// console.log(dayOne.parentElement.textContent)
// console.log(dayOne.nextElementSibling.nextElementSibling.nextElementSibling)

// important
console.log('NODES: ', parent.childNodes)