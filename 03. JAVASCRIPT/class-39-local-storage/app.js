// console.log("hello");

localStorage.setItem("name", "Ali")
localStorage.setItem("email", "ali@gmail.com")
localStorage.setItem("phone", "33457345923")
localStorage.setItem("male", true)

// var getValue = localStorage.getItem("email")
// console.log(getValue);

// localStorage.removeItem("male")

// localStorage.clear()

var obj = {
    name: "Smith",
    value: {
        age: 12
    }
}

// var h1 = document.getElementById("heading")
// h1.innerText = obj.name

// JSON.stringify()
// JSON.parse()
localStorage.setItem("name", JSON.stringify(obj))