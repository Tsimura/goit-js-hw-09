function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
btnStop.setAttribute('disabled', true);
let timerId = null;
// console.log(btnStart);
// console.log(btnStop);

btnStart.addEventListener('click', launchRandomColor);
btnStop.addEventListener('click', stopRandomColor);

function launchRandomColor() {
  timerId = setInterval(() => {
    document.body.style.background = `${getRandomHexColor()}`;
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled', true);
  }, 1000);
}

function stopRandomColor() {
  clearInterval(timerId);
  btnStart.removeAttribute('disabled', true);
  btnStop.setAttribute('disabled', true);
}
