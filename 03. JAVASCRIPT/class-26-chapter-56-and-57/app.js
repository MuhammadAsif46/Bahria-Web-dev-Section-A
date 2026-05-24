// ------ JS CHAPTER 56 TO 57 ------ //

//  var heading = document.getElementsByTagName("p")
// console.log(heading);

//  heading[1].style.color = "red"
//  heading[0].style.backgroundColor = "red"

// var heading = document.getElementById("div1")
// var para = heading.getElementsByTagName("p")
// console.log(heading);
// console.log(para);

// console.log(h );
// console.log(m );
// console.log(s );

// console.log("1");

// setTimeout(function(){
//     console.log("hello");
//     timer.innerText = h + " : " + m + " : " + s

// }, 5000 )

setInterval(function () {
  // console.log("hello");
  var timer = document.getElementById("timer");
  var date = new Date();

  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  timer.innerText  = h + " : " + m + " : " + s;
}, 1000);

// console.log("2");
