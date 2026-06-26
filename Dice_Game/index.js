var rollButton = document.getElementById("rollBtn");

rollButton.addEventListener("click", function () {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").src = "./images/dice" + randomNumber1 + ".png";
    document.querySelector(".img2").src = "./images/dice" + randomNumber2 + ".png";

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 is the Winner!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 is the Winner!";
    } else {
        document.querySelector("h1").innerHTML = "Draw! Roll Again!";
    }

});

var rollButton = document.getElementById("resetBtn");

rollButton.addEventListener("click", function () {
    document.querySelector(".img1").src = "./images/dice1.png";
    document.querySelector(".img2").src = "./images/dice1.png";
    document.querySelector("h1").innerHTML = "Roll";

});
