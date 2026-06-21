// ====== Chapter no 71 ====== //

var student = {
     firstName: "Hamza",
     lastName: "Ali",
     age: 23,
     class: "9th",
     address: "street 123",
     stdDetails: function(){
        return "Student first name is - " + this.firstName + "\n" +
        "Students last name is - " + this.lastName + "\n" + "Student class is - " + this.class
     }
}


console.log(student.age);
var std1 = student.stdDetails()
console.log(std1);

