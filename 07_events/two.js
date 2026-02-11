// const sayShihab = function(){
//     console.log('Shihab')
// }
// const changeText = function(){
//     document.querySelector('h1').innerHTML = 'Best JS Series'
// }
// const changeMe = setTimeout(changeText, 2000)

// document.querySelector('#stop').
// addEventListener('click', function(){
//     clearTimeout(changeMe)
//     console.log('Stopped')
// }, false)



const startEl = document.querySelector('#start');
const stopEl = document.querySelector('#stop');

const dateNow = function(str) {
    console.log(str ,Date.now());
}
let intervalId;

startEl.addEventListener('click', function(){
    intervalId = setInterval(dateNow, 1000, 'Shihab')
})
stopEl.addEventListener('click', function(){
    clearInterval(intervalId)
})