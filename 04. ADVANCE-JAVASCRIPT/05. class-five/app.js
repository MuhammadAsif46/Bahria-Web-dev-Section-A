// ====== ADVANCE JAVASCRIPT PART 05 ====== //

// Synchronous vs Asynchronous

// console.log("1");
// console.log("2");
// console.log("3");


// console.log(1);

// setTimeout(function () {
//     // console.log("Hello");
//     let obj = {
//         name: "yamal",
//         age: 32
//     }
//     abc(obj)
// }, 1000)

// console.log(obj);

// function abc(a) {
//     console.log(a);
// }

// function abc(callback){
//     let username = "hello"
//     callback(username)
//     // console.log(callback);

// }

// function foo(a){
//     console.log(a);
// }
// abc(foo)

let users = document.getElementById("users")

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            users.innerHTML += `
                <div class="cards">
                    <img src="https://picsum.photos/300/300" alt="image"/>
                    <h1>${data[i].name}</h1>
                    <h4>${data[i].email}</h4>
                    <p>${data[i].address.city}</p>
                </div>
            `
        }
    })    // success
    .catch(error => console.log(error)) // fail