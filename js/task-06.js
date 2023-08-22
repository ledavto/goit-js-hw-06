const textInput = document.querySelector("#validation-input");
const textLength = textInput.dataset.length;
console.log(textLength);

textInput.addEventListener("blur", () => {
  if (Number(textLength) === textInput.value.length) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
    console.log("Да");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
    console.log("НЕ");
  }
  console.log(textInput.value.length);
});
