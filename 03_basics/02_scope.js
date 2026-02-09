// var c = 300
let a = 300

if(true) {
    let a = 100
    const b = 200
    // var c = 30

    // console.log(a)
}
// console.log(a)
// console.log(b)
// console.log(a)

// var is global scope
// let & const are  blocked scope

function one(){ 
    const username = "Shihab"

    function two(){
        const website = "youtube"
        console.log(username) // possible. for tw0(), one() is global scope
    }
    // console.log(website) // not possible. block scope
    two()
}
one()

if(true){
    const username = "Shihab"
    if(username) {
        const website = "github"
        console.log(username)
    }
    // console.log(website) //error -> out of scope
}

// console.log(username) // error -> out of scope


console.log(addOne(5)) // -> no errors: can be used before initialize 
function addOne(num){
    return num + 1
}



// console.log(addTwo(5))  // -> reference error: cannor use before initialize
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(6))
