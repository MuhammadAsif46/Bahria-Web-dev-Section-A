// ------ JS CHAPTER 67 TO 68 ------ //

//   var para = document.createElement("h1")
//   var text = document.createTextNode("Hello world")
//   para.appendChild(text)
//   console.log(para);
//   var parent = document.getElementById("parent")
//   console.log(parent);
//   parent.appendChild(para)

//   var btn = document.createElement("button")
//   var btnText = document.createTextNode(input.value)
//   btn.appendChild(btnText)
//   console.log(btn);
//   console.log(btnText);
//   parent.appendChild(btn)

//   console.log(text);

function addTask() {
  var input = document.getElementById("text");
//   console.log(input.value);
var list = document.createElement("li")
var listValue = document.createTextNode(input.value)
list.appendChild(listValue)
// console.log(list);
var main = document.getElementById("main")
// console.log(main);
main.appendChild(list)
input.value = ""


}
