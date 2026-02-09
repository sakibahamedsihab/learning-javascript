const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

coding.forEach(function (item) {
//     console.log(item);  
})


function printMe(item){
    // console.log(item)
}
coding.forEach(printMe) // need to pass the reference of the function


coding.forEach((item, index, arr) => {
    // console.log(item, index, arr)
})

const myCoding = [
    {languageName: 'javascript', languageFileName: 'js'},
    { languageName: 'python', languageFileName: 'py'},
    {languageName: 'java', languageFileName: 'java'}
]

myCoding.forEach((item) => {
    // console.log(item.languageName)
} )

const values = coding.forEach( (item) => {
    // console.log(item)
})
//forEach function does not return anything

// console.log(values)


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredNums = myNums.filter((num) => (num > 4) )
// console.log(filteredNums)

const newNums = [];
myNums.forEach((num) => {
    if(num > 4) {
        newNums.push(num)
    }
})
console.log(newNums)