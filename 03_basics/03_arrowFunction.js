const user = {
    username: "Shihab",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
user.username = 'Shakib'
// user.welcomeMessage()
// console.log(this)

// function one() {
//     let username = "Shihab"
//     console.log(this.username) // undefined
// }

const one = () => {
    let username = 'Shihab'
    console.log(this)  // reference to {} object as like global
}
// one(5)


// arrow function 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit return
// const addTwo = (num1, num2) => num1 + num2 
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))

// return object 
const winner = () => ({username: 'Shihab'})
console.log(winner())


