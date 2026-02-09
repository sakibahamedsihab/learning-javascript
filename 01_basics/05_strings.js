// ************** Strings ******************

const name = 'Shihab'
const repoCount = 21

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shihab-sa Football War')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('W'))

const newString = gameName.substring(0, 4)
console.log(newString)


const newStringOne = "  shihsab";
console.log(newStringOne.trim())