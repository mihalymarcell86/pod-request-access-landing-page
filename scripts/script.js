"strict mode";

const form = document.querySelector("form");
const email = document.querySelector('input[type="email"]');
const errorDiv = document.querySelector(".form__error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  email.setCustomValidity("");
  if (email.checkValidity()) {
    email.value = "";
  }
});

email.addEventListener("invalid", (event) => {
  errorDiv.innerHTML = `Oops! Please ${
    event.target.value == "" ? "add" : "check"
  } your email.`;
  errorDiv.hidden = false;
});

email.addEventListener("keydown", () => {
  errorDiv.hidden = true;
});
