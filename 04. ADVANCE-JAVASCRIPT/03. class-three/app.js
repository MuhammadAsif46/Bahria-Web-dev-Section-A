// ====== ADVANCE JAVASCRIPT PART 03 ====== //

// ----- Destructuring ----- //

// let studentDetails = {
//     firstname: "Ahmed",
//     lastname: "Raza",
//     email: "raza@gmail.com"
// }

// let {email, lastname, firstname} = studentDetails

// console.log(studentDetails.email);
// console.log(studentDetails.firstname);
// console.log(studentDetails.lastname);

// console.log(firstname);
// console.log(lastname);
// console.log(email);


// let arr = ["college", "bahria", "university"]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// let [hello, user, world] = arr;
// console.log(hello, world, user);


// ----- Enhanced object literals ----- //

// let username = "Jhon"
// let age = 32

// let person = {
//     username,
//     age,
// }

// console.log(person);


// -------- Iterators & For..of  ------- //

// let cities = ["khi", "lhr", "isl"]

// for(let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
// }

// for values:
// for(let city of cities){
//     console.log(city);
// }

// // for index no:
// for(let city in cities){
//     console.log(city);
// }

// ---------- Arrow functions ----------- //

// function foo(){
//     console.log("test");
// }
// foo()

// let foo = function (){
//     console.log("practice");
// }

// foo()


// arrow function:

// 10 x 10 = 100

// function greet(num){
//     return num + 10
// }
// let result = greet(10)
// console.log(result);

// let greet = num => num + 10;


// let res = greet(10)
// console.log(res);


// let greet = num => num + 10

// let res = greet(10)
// console.log(res);


// let sum = (a, b) => a + b
// let mul = (a, b) => a * b
// let division = (a, b) => a / b
// let sub = (a, b) => a - b


// function foo(){
//     console.log("test");
// }
// foo()

// let foo = () => console.log("test");

// foo()


// classes

// function person(){}
// function Person(){}

class Student {
    constructor(name, age, grade){
        this.name = name,
        this.age = age,
        this.grade = grade
    }
} 

let std1 = new Student("Warner", 34, "PHD")
let std2 = new Student("Nelson", 23, "Master")
console.log(std1);
console.log(std2);
