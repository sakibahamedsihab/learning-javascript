function sayMyName() {
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("H")
    console.log("A")
    console.log("B")
}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)  // returns undefined
// }

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
    console.log("Shihab") // will not print anything after return statement
}
const result = addTwoNumbers(3, 4)
// console.log(`Result: ${result}`)


function loginUserMessage(username) {
    if(!username) {  // username === undefined
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

let message =  loginUserMessage("Shihab")
console.log(message)
// console.log(loginUserMessage())  // if no argument is passed it passes undefined as argument
