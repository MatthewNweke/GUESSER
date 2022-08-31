const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
let number = document.querySelector(".number");
let message = document.querySelector(".message");
const score = document.querySelector(".score");
let scoreNum = 20;
const againBtn = document.querySelector(".again");
const curHighScore = document.querySelector(".highscore");
let highScore = 0;

check.addEventListener("click", () => {
    const secretNumber = Math.floor(Math.random() * 20 + 1);
    let guessVal = Number(guess.value) === secretNumber;

    if (guess.value === "") {
        message.textContent = "No number";
        document.body.style.backgroundColor = "#222";

    }
    else if (guessVal) {
        message.textContent = "Correct number";
        document.body.style.backgroundColor = "#60b347";
        number.style.width = "30rem";
        number.innerHTML = secretNumber;
        if (scoreNum > highScore) {
            highScore = scoreNum;
            curHighScore.textContent = highScore;
        }
    }
    else if (guess.value > secretNumber) {
        message.textContent = "Too high";
        score.textContent = --scoreNum;
        document.body.style.backgroundColor = "#222";

    }
    else if (guess.value < secretNumber) {
        message.textContent = "Too low";
        score.textContent = --scoreNum;
        document.body.style.backgroundColor = "#222";

    }
    if (scoreNum === 0 || scoreNum < 0) {
        message.innerHTML = "<p>you lost the game, <br> <br> click restart</p>";
        score.textContent = 0;
        document.body.style.backgroundColor = "#222";
        number.style.width = "15rem";
        number.innerHTML = "?";
        message.style.color = "red";
    }

});

againBtn.addEventListener("click", () => {
    scoreNum = 20;
    message.textContent = "Start guessing..."
    guess.value = "";
    number.style.width = "15rem";
    number.innerHTML = "?";
    document.body.style.backgroundColor = "#222";
    message.style.color = "#eee";
    // number.style.width = "15rem"
    score.innerHTML = scoreNum;
})