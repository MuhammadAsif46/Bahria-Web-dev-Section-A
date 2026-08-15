// Signup variables
// let signupEmail = document.getElementById("signupEmail")
// let signupPassword = document.getElementById("signupPassword")
// let signupBtn = document.getElementById("signupBtn")

// Login Varibales
let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")
let loginBtn = document.getElementById("loginBtn")

// Signup Function:
// signupBtn.addEventListener("click", function(){
//     console.log(signupEmail.value);
//     console.log(signupPassword.value);
//     let userData = {
//         email: signupEmail.value,
//         password: signupPassword.value,
//     }
//     let userInfo = JSON.stringify(userData)
//     localStorage.setItem("user", userInfo)
// })

// Login Function:
loginBtn.addEventListener("click", function () {
    // console.log(loginEmail.value);
    // console.log(loginPassword.value);

    let userValues = localStorage.getItem("user")
    let userData = JSON.parse(userValues)
    console.log(userData);

    if (userData.email == loginEmail.value && userData.password == loginPassword.value) {
        // alert("Login Successfully")
        Swal.fire({
            title: "Welcome",
            text: "Login Successfully",
            icon: "success"
        });
        
        setTimeout(()=>{
            window.location.href = "home.html"
        },2000)

    } else {
        // alert("Email or Password Incorrect!")
        Swal.fire({
            title: "Oops.....",
            text: "Email or Password Incorrect!",
            icon: "error"
        });
    }


    // let userData = {
    //     email: signupEmail.value,
    //     password: signupPassword.value,
    // }
    // let userInfo = JSON.stringify(userData)
    // localStorage.setItem("user", userInfo)
})