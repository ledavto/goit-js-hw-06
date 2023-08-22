let counterValue = 0;

const actionBtns = document.querySelectorAll("button");
const spanEl = document.querySelector("#counter").children[1];
console.log(actionBtns);

actionBtns[0].addEventListener("click", () => {
  counterValue--;
  spanEl.textContent = counterValue;
});
actionBtns[1].addEventListener("click", () => {
  counterValue++;
  spanEl.textContent = counterValue;
});

console.log(spanEl);
