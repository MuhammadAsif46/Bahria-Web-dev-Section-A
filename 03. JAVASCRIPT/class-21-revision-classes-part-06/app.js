// ------ JS CHAPTER REVISION 31 TO 37 ------ //

//  var date = new Date();
//  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//  console.log(date);
//  console.log(date.getDay());
//  console.log(days[date.getDay()]);
// console.log(date.getTime());

var firstMoh = new Date("16 June 2026")
var currentDate = new Date()
var res = firstMoh.getTime() - currentDate.getTime()
// console.log(firstMoh.getTime());
// console.log(currentDate.getTime());
var finalValue = res / (1000 * 60 * 60 * 24)
console.log(Math.floor(finalValue) + " Days are remaining in Moharram");

 

