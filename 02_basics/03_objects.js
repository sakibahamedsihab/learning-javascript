// singleton ->  made from constructors => object.create

// object literals
const jsUser = {
    name: "Shihab",
    "full name": "Shihab Ahmed",
    age: 25,
    location: "Dhaka",
    email: "Shihab@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"]) // only way to access this
 

jsUser.email = "Shihab@gemini.com"
// Object.freeze(jsUser) // values cannot be changed
// console.log(jsUser.email)
jsUser.email = "shihab@ChatGPT.com"
// console.log(jsUser.email)


jsUser.greeting = function () {
    console.log("Hello JS user")
}

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())