// XMLHttpRequest is an object that works like a delivery man
// This is the browser's old way to communicate with a server

// When .open('GET', apiURL) is called,
// it prepares the request by writing down the address and method,
// but it does NOT send the delivery man yet

// When .send() is called,
// the delivery man actually goes to the server
// and waits there while the request is processed (async by default)

// As the request progresses, readyState changes
// When readyState becomes 4,
// the response has been fully received from the server


const requestUrl = 'https://randomuser.me/api/'
const xhr = new XMLHttpRequest()
xhr.open('POST', requestUrl);
console.log(xhr.readyState)
xhr.send();
xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    if(xhr.readyState === 4) {
        console.log(this.responseText);
    }
}
console.log('HERE')
