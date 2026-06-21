// ====== Chapter no 72, 73 and 75 ====== //

// function Student(a, b, c, d) {
//    this.name = a,
//    this.fname = b,
//    this.stdClass = c
//    this.age = d
//    this.stdDetails = function(){
//       return this.name + " " + this.age
//    }
// }

// var std1 = new Student("Ali", "Ahmed", "6th", 12)
// var std2 = new Student("Fahad", "Ahmed", "9th", 14)
// var std3 = new Student("Fahad", "Ahmed", "9th", 14)
// console.log(std1);
// console.log(std2);

// var details = std1.stdDetails()
// console.log(details);


// var obj = {
//    firstName: "abc",
//    lastName: "def",
//    age: 321,
//    stdDetails: function(){
//       return this.firstName + " " + this.lastName
//    }
// }

// console.log("cardDetails" in obj);


var car = {
   brand: "civic",
   company: "honda",
   price: 85_00_000
}

for(var a in car){
   // console.log(car[a]);
   console.log(a); 
   // brand
   // company
   // price
}


// var days = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"]

// var date = new Date()
// console.log(days[date.getDay()]);


// var abc = "hello"
// var 123 = 