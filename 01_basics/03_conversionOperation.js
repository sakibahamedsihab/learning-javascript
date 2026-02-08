let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);  // number
// console.log(valueInNumber) // Nan

// "33" => 33, type number
// "33abc" => NaN, type number
// true => 1 & false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn) // 1
console.log(booleanIsLoggedIn) // true

// 1 => true; 0 => false; 
// "" => false
// "Shihab" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber) // 33
console.log(typeof stringNumber) // string