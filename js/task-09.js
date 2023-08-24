function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

console.log(btnEl);

btnEl.addEventListener('click', () => {
  const randColor = getRandomHexColor();
  spanEl.textContent = randColor;
  document.body.style.backgroundColor = randColor;
});

