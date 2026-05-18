// ------ JS CHAPTER 39 TO 40 ------ //

// var day = "Wed";
// var month = "May"

// if (day === "Sun" && month == "May") {
//   console.log("today is sunday");
// } else if (day === "fri") {
//   console.log("today is friday");
// } else if (day === "Sat") {
//   console.log("today is Saturday");
// } else {
//   console.log("Today is another day");
// }

var day = "Mon";
var month = "May"

switch (day) {
  case "Sun": // case 1
    console.log("today is sunday");
    break;
  case "Fri":  // case 2
    console.log("today is Friday");
    break;
  case "Sat":  // case 3
    console.log("today is Saturday");
    break;
  default:
    console.log("Today is another day");
}
