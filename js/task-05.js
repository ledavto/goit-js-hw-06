const textInput = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") spanEl.textContent = "Anonymous";
  else spanEl.textContent = event.currentTarget.value;
});
