let countElement = document.querySelector("#counter");
let buttonStart = document.querySelector("#start");
let buttonPause = document.querySelector("#pause");
let buttonReset = document.querySelector("#reset");

let counter = 0;
let timerID;
buttonStart.onclick = function () {
  timerID = setInterval(function () {
    counter++;
    countElement.innerText = counter;
  }, 1000);
};
buttonPause.onclick = function () {
  clearInterval(timerID);
};
buttonReset.onclick = function () {
  counter = 0;
  countElement.innerText = counter;
  clearInterval(timerID);
};
