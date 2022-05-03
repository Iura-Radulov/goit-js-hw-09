const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

startBtnEl.addEventListener("click", onStartBtnClick);
stopBtnEl.addEventListener("click", onStopBtnClick);

function onStartBtnClick() {
    startBtnEl.disabled = true;
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();        
    }, 1000)
}
function onStopBtnClick() {
    clearInterval(timerId);
    startBtnEl.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
