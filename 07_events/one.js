// attachEvent()
// jQuery - .on

const owlEl = document.querySelector('#owl');

owlEl.addEventListener('click', function(event){
    console.log(event)
}, false)

// type, timeStamp, preventDefault
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

