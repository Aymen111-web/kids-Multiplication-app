/** @format */

const num1 = Math.ceil(Math.random() * 10); //to remove decimal we use ceil
const num2 = Math.ceil(Math.random() * 10);
let que = document.getElementById("question");
let inputE1 = document.getElementById("input");
let formE1 = document.getElementById("form");
const scoreE1 = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreE1.innerText = `You score: ${score}`;

que.innerText = `What is ${num1} multiply by ${num2} ?`;
let correctAns = num1 * num2;

formE1.addEventListener("submit", () => {
  const userAns = +inputE1.value;

  if (userAns === correctAns) {
    score++;

    updateLocalStorage();
  } else {
    score--;

    updateLocalStorage();
  }
});

function updateLocalStorage() {
  
  localStorage.setItem("score", JSON.stringify(score));
}
