// const tinderUser = new Object()  -> singleton object
const tinderUser = {}

tinderUser.id = '1234abc'
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: 'Some@gemini.com',
    fullName: {
        userFullName: {
            firstName: "shihab",
            lastName: "Ahmed"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: 'a', 2:'b'}
const obj2 = {3: 'c', 4:'d'}


// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3)

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
