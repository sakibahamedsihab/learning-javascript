const accountId = 2441139;
let accountEmail = "sakib@gmail.com";
var accountPassword = '12345';
accountCity = 'Dhaka';
let accountState;

// accountId = 2;
console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope
*/

accountEmail = 'Shihab@gmail.com'

console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

console.log(accountState);

console.log(typeof 'string');
