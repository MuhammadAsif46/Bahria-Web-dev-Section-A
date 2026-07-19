// ====== ADVANCE JAVASCRIPT PART 02 ====== //

// ---- Exponentiation Operator ----- //

// let num = 2 ** 4 
// let num = 4 ** 3 
// 4 x 4 x 4 = 64
// 2 x 2 x 2 x 2 = 16
// console.log(num);


// ----- Optional chaining ------ //

// let student = {
//     name: "Ali",
//     courses: {
//         title: "HTML"
//     },
//     teacher: {
//         name: "Jhon"
//     }
// }


// console.log("1");

// console.log(student.name);
// console.log(student.courses.title);
// console.log(student?.teacher?.name);

// console.log("2");

// -----  Default parameters ------ //

// function greet(name = "Hamza"){
//     console.log(`Welcome, ${name}`);
// }

// greet("Ali")
// greet()
// greet("Clerk")


// ----- Rest parameter ------ //

// function marks(...abc){
//     console.log(abc);
// }

// marks(10, 20, 40, 50, 90, 18)


// ----- Spread Operator ------- //

// let student = {
//     name: "Bilawal",
//     age: 44,
// }

// let studentOtherDetail = {
//     ...student,
//     email: "bilawal@gmail.com"
// }

// console.log(studentOtherDetail);

// let studentPersonalInfo = {
//     name: "Bilawal",
//     age: 44,
// }

// let studentAcademicInfo = {
//     result: "A+",
//     percentage: "90%"
// }



// let studentData = {
//     ...studentPersonalInfo,
//     ...studentAcademicInfo
// }

// console.log(studentData);


// let cities = ["Karachi", "Islamabad"]
// let countries = ["China", "Nepal"]

// console.log(...cities, ...countries);


let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = [...arr1, ...arr2]
console.log(arr3);
