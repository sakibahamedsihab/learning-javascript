// array

const myArray = [0, 1, 2, 3, 4, 5]

const myHeros = ['Epstein', 'Joker']

const myArrayTwo = new Array(1,2,3,4,5)

// myArray.push(6);
// myArray.push(7);
// myArray.pop()



myArray.unshift(5)
myArray.shift()

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(9)) // -1 for non existing value
// console.log(myArray.indexOf(3))

const newArray = myArray.join()
// array.join() -> transform array into a string
// console.log(typeof newArray)
// console.log(newArray)

// console.log(myArray)



// slice, splice
console.log("A ", myArray);

const myNewArrayOne = myArray.slice(1,3)
console.log(myNewArrayOne)
console.log("B ", myArray)

const myNewArrayTwo = myArray.splice(1, 3)
console.log(myNewArrayTwo)
console.log("C ", myArray)


