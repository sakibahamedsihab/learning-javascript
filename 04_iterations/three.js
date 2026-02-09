// for in loop for object

const myObject = {
    name: 'Shihab',
    age: 25,
    study: 'Bachelor',
    CGPA: 3.96
}

for(const key in myObject) {
    console.log(myObject[key])
}