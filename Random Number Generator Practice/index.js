console.log("running!!");
const start = document.querySelector("#start");
const clear = document.querySelector("#clear");
const max1 = document.getElementById("max");
const display = document.querySelector(".display");

function randomNumber(num) {
  num = max1.value;
  const put = Math.floor(Math.random() * num);
  return put;
}

function startFn() {
  display.textContent = randomNumber();
}

function clearFn() {
  display.textContent = "Random Number Will Go Here";
  max1.value = null;
 
}
start.addEventListener("click", startFn);
clear.addEventListener("click", clearFn);
