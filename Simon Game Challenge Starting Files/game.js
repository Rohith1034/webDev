var level = 0;
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
function nextSequence() {
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  level = level + 1;
  document.querySelector("h1").innerHTML = "Level" + " " + level;

}

$(".btn").click(function handler() {
  var userChosenColour = $(this).attr("id");;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  check(userClickedPattern.length - 1);
}
);

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currrentColor) {
  $("#" + currrentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currrentColor).removeClass("pressed");
  }, 100);
}

var a = document.addEventListener("keypress", nextSequence);

function check(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[level]) {
    console.log("success");
    if (gamePattern.length == userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }

  else {
    audio1 = new Audio("sounds/wrong.mp3");
    audio1.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    },200);
    $("h1").innerHTML = "Game Over, Press Any Key to Restart";
  }

}



