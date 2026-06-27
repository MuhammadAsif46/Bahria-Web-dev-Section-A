// ====== Chapter no 76 to 78 ====== //

// window.location.href
// 'https://www.sellkar.pk/'
// window.location.hostname
// 'www.sellkar.pk'
// window.location.pathname
// '/'
// window.location.pathname
// '/about'


function goToFacebook (){
   // window.location.href = "https://www.facebook.com"
   window.location.assign("https://www.twitter.com")
   // window.location.replace("https://www.instagram.com")

}

function reload(){
   window.location.reload()
}
function back(){
   history.back()
}
function forward(){
   history.forward()
}

function open(){
   window.open("home.html")
}