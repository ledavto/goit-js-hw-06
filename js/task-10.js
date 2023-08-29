function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

const boxesEl = document.querySelector('#boxes');
const numInput = document.querySelector("#controls").firstElementChild;




btnCreate.addEventListener("click", () => {
  console.log(numInput.value);
});


// const btnEl = document.querySelector('.change-color');
// const spanEl = document.querySelector('.color');

// console.log(btnEl);

// btnEl.addEventListener('click', () => {
//   const randColor = getRandomHexColor();
//   spanEl.textContent = randColor;
//   document.body.style.backgroundColor = randColor;
// });