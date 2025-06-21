"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.addEventListener("keyup", function () {});
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("NO Number !");
  }

  // IF Correct guess
  if (guess === secretNumber) {
    displayMessage("Correct Number !!!!");
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // IF Wrong Guess
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? "Too High" : "Too Low");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost... Try Again ");
    }
  }
  // // High guess
  // else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "Too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost... Try Again ";
  //   }
  //   // Low guess
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost... Try Again ";
  //   }
  // }
});

//Challenge 1
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});
