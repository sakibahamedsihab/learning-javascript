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
// console.log(message)
// console.log(loginUserMessage())  // if no argument is passed it passes undefined as argument



function calculateCartPrice(...num1){
// functtion calculateCartPrice(val1, val2, ...num1)  -> num1 = [400, 600]
    return num1.reduce((acc, num) => acc + num, 5)
}

// console.log(calculateCartPrice(200, 300, 400 ,600)) // val1 = 200, val2 = 300 & num1 = [400, 600]


const user = {
    username: "Shihab",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "Shihab",
    price: 69
})

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 569, 600, 100]))