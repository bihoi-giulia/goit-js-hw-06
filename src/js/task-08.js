const loginForm = document.querySelector(".login-form");
const submitButton = loginForm.querySelector('button[type="submit"]');

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formValues = Object.fromEntries(formData.entries());

  if (Object.values(formValues).some((value) => value === "")) {
    alert("Please fill in all fields");
  } else {
    console.log(formValues);
    loginForm.reset();
  }
});
