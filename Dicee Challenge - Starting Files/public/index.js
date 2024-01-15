var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;
if (randomNumber1 == 1) {
    document.querySelectorAll("img")[0].setAttribute("src","dice1.png");
}
if (randomNumber1 == 2) {
    document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
}
if (randomNumber1 == 3) {
    document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
}
if (randomNumber1 == 4) {
    document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
}
if (randomNumber1 == 5) {
    document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
}
if (randomNumber1 == 6) {
    document.querySelectorAll("img")[0].setAttribute("src","dice6.png");
}
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;
if (randomNumber1 == 1) {
    document.querySelectorAll("img")[1].setAttribute("src","dice1.png");
}
if (randomNumber2 == 2) {
    document.querySelectorAll("img")[1].setAttribute("src","dice2.png");
}
if (randomNumber2 == 3) {
    document.querySelectorAll("img")[1].setAttribute("src","dice3.png");
}
if (randomNumber2 == 4) {
    document.querySelectorAll("img")[1].setAttribute("src","dice4.png");
}
if (randomNumber2 == 5) {
    document.querySelectorAll("img")[1].setAttribute("src","dice5.png");
}
if (randomNumber1 == 6) {
        document.querySelectorAll("img")[1].setAttribute("src","dice6.png");
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩Player1 wins";
}

else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerText = "draw!";
}

else {
    document.querySelector("h1").innerText = "Player2 wins🚩";
}
