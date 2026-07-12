// console.log("hello");

function submit(){
    // var dropdown = document.getElementById("dropdown")
    // var gender = document.getElementsByName("gender")
    
    // console.log(gender);

    // for(var i = 0; i < gender.length; i++){
    //     if(gender[i].checked){
    //         console.log(gender[i].value);
    //     }
    // }

    var profileImage = document.getElementById("profileImage")
    var image = document.getElementById("image")
    console.log(profileImage.files[0]);

    var file = profileImage.files[0]
    var res = URL.createObjectURL(file)
    image.src = res

}



