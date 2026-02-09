// de structuring

const course = {
    courseName: 'Data Scice',
    price: '999',
    courseInstructor: 'Shihab'
}

// course.courseInstructor
// course.courseName
// course.price

const {courseInstructor: instructor, price, courseName: name} = course
console.log(instructor)
console.log(price)
console.log(name)

// api

// {
//     'name':'shihab',
//     'courseNmae': 'Data Science',
//     'price': 'free'
// }


// [
//     {},
//     {},
//     {}
// ]