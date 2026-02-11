// promise one
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, Network
    setTimeout(function(){
        resolve();
        // console.log('Async task is complete');
    }, 1000)
})

promiseOne.then(function(){
    // console.log('Promise consumed')
})

// promise two
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log('Async task 2');
        resolve();
    } ,1000)
}).then(function(){
    // console.log('Async 2 resolve')
})

// promise three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Shihab', email: 'Shihab@gemini.com'})
    } ,1000)  
})

promiseThree.then(function(user){
    console.log(user);
})


// promise four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username:'shihab', password:1234})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
})
.finally(() => console.log('The promise is either resolved or rejected!'))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username:'javascript', password:1234})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try { 
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()