// attachEvent()
// jQuery - .on

const owlEl = document.querySelector('#owl');
const imagesEl = document.querySelector('#images');
const googleEl = document.querySelector('#google');


//------------------****-----------------
//      NEED TO RESEARCH THESE EVENTS

// type, timeStamp, preventDefault
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode


imagesEl.addEventListener('click', function(event){
    // console.log(event)
    console.log('clicked inside the ul')
    // event.stopPropagation();
}, false)


owlEl.addEventListener('click', function(event){
    // console.log(event)
    console.log('owl clicked') 
    event.stopPropagation() // prevent event bubbling
}, false)

// event activity, if false (event bubbling) --> first child and then parent
// event activity, if true (event capturing) --> first parent and then child

googleEl.addEventListener('click', function(event){
    event.preventDefault();
    event.stopPropagation();
    console.log('google clicked');
}, false) // false --> event bubbling => child -> parent




