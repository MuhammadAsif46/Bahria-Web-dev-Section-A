// console.log("hello")

// Array methods():

// sort() -> array elements ko sort karta hai
// join() -> array ko string me convert karta hai
// split() -> string ko array me convert karta hai
// reverse() -> array order reverse karta hai

// Sort:
// var num = [1,4, 8, 2, 6, 3, 100]
// num.sort()
// console.log(num);

// Reverse:
// var cities = ["khi", "lhr", "isl", "pindi"]
// cities.reverse()
// console.log(cities);

// Split:
// var value = "hello"
// console.log(value.split(""));

// Join:
// var username = ["This", "is", "an", "Apple"]
// console.log(username.join(" "));

// Chapter: 18 -> For Loop:
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// For Loop -> Syntax:
// initailization; -> condition; -> increment
// for(var i = 0; i <= 10; i++){
//     console.log(i);
// }

// Chapter: 19 -> For Loop: array length and breaks
// var cities = ["khi", "lhr" ,"isl","pindi"]
// console.log(cities.length)

// for(var i = 0; 0 < cities.length; i++){
//     console.log(cities[0]);
// }
// for(var i = 0; i <= 10; i++){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

// Chapter: 20 -> For Loop Nested:
// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 3; j++) {
//     console.log(i , j);
//   }
// }
// 1, 1
// 1, 2
// 1, 3
// 2, 1
// 2, 2
// 2, 3
// 3, 1

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {}
}


// ========== boys ========== //

// var a = "college";
// undefined
// var b = a.slice(0,1).toUpperCase()
// undefined
// console.log(b)
// VM738:1 C
// undefined
// a.slice(1)
// 'ollege'
// var c = a.slice(1)
// undefined
// console.log(b + c)
// VM838:1 College
// undefined

// var a = "World War II"
// undefined
// a.indexOf("a")
// 7
// var a = "World War II, The New York Magzine"
// undefined
// a.indexOf("g")
// 29


// var text = "To be or not to be";
// undefined
// text.lastIndexOf("be")
// 16

// text.charAt(3)
// 'b'
// var text = "To be or not to be";

// var text = "To be or not to be";
// undefined
// text.replace("be", "am")
// 'To am or not to be'
// text.replaceAll("be", "am")
// 'To am or not to am'