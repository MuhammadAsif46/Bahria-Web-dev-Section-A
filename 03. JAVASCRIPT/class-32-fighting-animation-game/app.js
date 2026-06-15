var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")

var p1Left = 50;
var p1Bottom = 0;

var p2Right = 50;
var p2Bottom = 0;


document.addEventListener("keydown", function (event) {
    // console.log(event.key);

    // Player 1:
    if (event.key === "w") {
        p1Bottom += 10;
        player1.style.bottom = p1Bottom + "px";
        player1.src = "images/iron-fly.gif"

    }
    if (event.key === "s") {
        p1Bottom -= 10;
        player1.style.bottom = p1Bottom + "px"
        player1.src = "images/ironman-bottom.gif"

    }
    if (event.key === "a") {
        p1Left -= 10;
        player1.style.left = p1Left + "px";
        player1.src = "images/iron-walk.gif"
    }
    if (event.key === "d") {
        p1Left += 10;
        player1.style.left = p1Left + "px";
        player1.src = "images/iron-walk.gif"
    }

    // player 2:
    if (event.key === "ArrowUp") {
        p2Bottom += 10;
        player2.style.bottom = p2Bottom + "px";
        player2.src = "images/hulk-fly.gif"
    }
    if (event.key === "ArrowDown") {
        p2Bottom -= 10;
        player2.style.bottom = p2Bottom + "px";
        player2.src = "images/hulk-bottom.gif"
    }
    if (event.key === "ArrowRight") {
        p2Right += 10;
        player2.style.right = p2Right + "px";
        player2.src = "images/hulk-walk.gif"
    }
    if (event.key === "ArrowLeft") {
        p2Right -= 10;
        player2.style.right = p2Right + "px";
        player2.src = "images/hulk-walkback.gif"
    }

})
// console.log(window.innerHeight);
// console.log(window.innerWidth);
