const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені!");
  }
    const formValue = {};
    formValue.email = email;
    formValue.password = password;
  console.log(formValue);
  form.reset();
}
