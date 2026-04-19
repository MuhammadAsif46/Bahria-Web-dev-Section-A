// ------ JS CHAPTER REVISION 11 TO 17 ------ //

// var num = 5

// if(num > 5){
//   console.log("Your First Condition is true");
// } else if(num != 5){
//   console.log("Your Seond Condition is true");
// } else {
//   console.log("Your Condition is False");
// }

// var weight = 500
// var time = 7

// if (weight > 300 || time < 6) {
//   console.log("Come to our tryout!");
// } else {
//   console.log("Come to our cookout!");
// }

var weight = 500;
var time = 7;

// if (weight > 300) {
//   if (time < 6) {
//     console.log("Come to our weight!");
//   } else {
//     console.log("Come to our time!");
//   }
// } else {
//   console.log("Come to our kuch nahi!");
// }

var cities = ["Khi", "Isl", "Lhr", "Pindi"]
// console.log(cities[2]);
console.log(cities);
cities.push("Quetta")
cities.unshift("Dha")
cities.pop()
cities.shift()
console.log(cities);
// var favCities = cities.slice(2, 4)
// console.log(favCities);

// cities.splice(1,0)
// cities.splice(1,2,)
cities.splice(2,0, "Quetta")
console.log(cities);


