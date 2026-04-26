// ------ JS CHAPTER REVISION 23 TO 30 ------ //

// var text = "If the segment exists, the method finds"

// console.log(text.indexOf("the"));
// console.log(text.lastIndexOf("the"));
// // console.log(text.length);
// console.log(text.charAt(2));
// console.log(text.charAt(20));

// console.log(text.replace("the", "am"));
// console.log(text.replaceAll("the", "am"));

// var numberAsNumber = 1234;
// var numberAsString = numberAsNumber.toString();
// console.log(typeof numberAsNumber, numberAsNumber);
// console.log(typeof numberAsString, numberAsString);

// write a javascript function called CalculateGrade
// that takes a number as input and returns
// the corresponding grade based on the following criteria:

// - 90 and above: A
// - 80 to 89: B
// - 70 to 79: C
// - 60 to 69: D
// - Below 60: F



// function CalculateGrade(score) {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else if (score >= 70) {
//     return "C";
//   } else if (score >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }
// Example usage:
// var score = 85;
// var grade = CalculateGrade(score);
// console.log("Score: " + score + ", Grade: " + grade);

// ======== Calculate Grade Function ======== //

var userInput = prompt("Enter your score")
function grade(score) { // parameter
  // console.log(score);
  if (score >= 90) {
    console.log("A");
  } else if (score >= 70) {
    console.log("B");
  } else if (score >= 50) {
    console.log("C");
  } else {
    console.log("F");
  }
}

grade(userInput); // argument

