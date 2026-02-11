const imageEl = document.querySelector('#images');
imageEl.addEventListener('click', function(event){
    // console.log(event);
    console.log(event.target.parentNode)
    console.log(event.target.tagName)
    if(event.target.tagName === 'IMG'){
        console.log(event.target.id)
        let removeIt = event.target.parentNode;
        removeIt.remove()
    }
    // removeIt.parentNode.removeChild(removeIt);
    // event.target.parentNode = li
    // li.parentNode = ul
    // ul.removeChild(li)
}, false)