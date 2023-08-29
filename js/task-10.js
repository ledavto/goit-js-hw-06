function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

const boxesEl = document.querySelector("#boxes");
const numInput = document.querySelector("#controls").firstElementChild;
//const amount = numInput.value;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.classList.add("divbox");
    divEl.style.background = getRandomHexColor();
    divEl.style.height = 30 + 30 * i + "px";
    divEl.style.width = 30 + 30 * i + "px";
    boxesEl.append(divEl);
  }

  console.log(amount);
}

function destroyBoxes() {
  const arrDiv = document.querySelectorAll("divbox");
  console.log(arrDiv);
  arrDiv.forEach((element) => {
    element.remove();
  });
}
btnCreate.addEventListener("click", () => createBoxes(numInput.value));
btnDestroy.addEventListener("click", () => destroyBoxes());

// const btnEl = document.querySelector('.change-color');
// const spanEl = document.querySelector('.color');

// console.log(btnEl);

// btnEl.addEventListener('click', () => {
//   const randColor = getRandomHexColor();
//   spanEl.textContent = randColor;
//   document.body.style.backgroundColor = randColor;
// });
