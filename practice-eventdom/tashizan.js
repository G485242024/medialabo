
let button = document.querySelector("#calc");

button.addEventListener("click", calc);

function calc() {

  let leftInput = document.querySelector("#left");
  let rightInput = document.querySelector("#right");

  let left = parseInt(leftInput.value, 10);
  let right = parseInt(rightInput.value, 10);

  let answer = left + right;

  let answerBox = document.querySelector("#answer");
  answerBox.textContent = answer;
}
