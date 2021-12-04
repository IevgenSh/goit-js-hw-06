function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const btnChangeColor = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

function onBtnClick () {
  body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = body.style.backgroundColor;
}

btnChangeColor.addEventListener('click', onBtnClick);
