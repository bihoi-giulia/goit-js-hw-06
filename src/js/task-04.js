const counter = document.getElementById("counter");
const valueSpan = document.getElementById("value");
const incrementButton = counter.querySelector("[data-action=increment]");
const decrementButton = counter.querySelector("[data-action=decrement]");
let counterValue = 0;
function increment() {
  counterValue++;
  updateCounter();
}

function decrement() {
  counterValue--;
  updateCounter();
}

function updateCounter() {
  valueSpan.textContent = counterValue;
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
updateCounter();
