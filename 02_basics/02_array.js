const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)

 const newArray = marvelHeros.concat(dcHeros) // add both arrays and returns a new array without changing the original array

// console.log(marvelHeros)
// console.log(newArray)


// spread operator

const newArrayOne = [...dcHeros, ...marvelHeros]
// console.log(newArrayOne)

let res = Array.isArray("Shihab")
// Array.isArray(dataType) -> checks if the data type an Array or Not and returns a boolean value

console.log(res)

let resOne = Array.from("Shihab")
// Array.from(dataType) -> returns a array from any dataType

console.log(resOne)

let scoreOne = 100
let scoreTwo = 200
let scoreThree = 300

let resThree = Array.of(scoreOne, scoreTwo, scoreThree)
// Array.of(eleOne, eleTwo, eleThree, ....) returns an array from a set of elements

console.log(resThree)