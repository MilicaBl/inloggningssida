const user = "test";
const password = "1234";
//All contant
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");
const loginHolder = document.createElement("div");
const myProfileHolder = document.createElement("div");
const myProfile = document.createElement("h1");
const myOrdersHolder = document.createElement("div");
const myOrders = document.createElement("h1");
const imageHolder = document.createElement("div");
const heading = document.createElement("h1");
const userNameInput = document.createElement("input");
const passwordInput = document.createElement("input");
const loginBtn = document.createElement("button");
const errorMessage = document.createElement("p");
const userName = document.createElement("p");
const logoutBtn = document.createElement("button");
const profileHolder = document.createElement("div");

//Adding attributes and classes
userNameInput.setAttribute("type", "text");
userNameInput.setAttribute("placeholder", "användarnamn");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "lösenord");
myProfileHolder.classList.add("myProfileImg");
myOrdersHolder.classList.add("myOrdersImg");
imageHolder.classList.add("mainImg");
errorMessage.classList.add("errorMessage");

//Adding innerText
footer.innerText = "© 2024 Inloggningssida - All rights reserved";
myProfile.innerText = "My Profile";
myOrders.innerText = "Order History";
heading.innerText = "Custom Dried Flower Bouquets";
loginBtn.innerText = "Logga in";
logoutBtn.innerText = "Logga ut";

//Append
myProfileHolder.appendChild(myProfile);
myOrdersHolder.appendChild(myOrders);
imageHolder.appendChild(heading);
main.appendChild(imageHolder);
loginHolder.append(userNameInput, passwordInput, loginBtn);
profileHolder.append(userName, logoutBtn);
document.body.append(header, main, footer);

//View when not logged in
function notLoggedIn() {
  emptyInputValues();
  header.appendChild(loginHolder);
  profileHolder.remove();
  myOrdersHolder.remove();
  myProfileHolder.remove();
}
function emptyInputValues() {
  userNameInput.value = "";
  passwordInput.value = "";
}

//View when logged in
function loggedIn() {
  showUserName();
  loginHolder.remove();
  header.appendChild(profileHolder);
  main.appendChild(myOrdersHolder);
  main.appendChild(myProfileHolder);
}
function showUserName() {
  let savedUser = localStorage.getItem("userName");
  userName.innerText = "Välkommen" + " " + savedUser;
}

//Handle wrong or no input validation
function validateLogin() {
  if (userNameInput.value != user || passwordInput.value != password) {
    if (userNameInput.value.length < 1 && passwordInput.value.length < 1) {
      handleWrongOrNoInput(
        userNameInput,
        "Du behöver fylla i både användarnamn och lösenord!",
        passwordInput
      );
    } else if (userNameInput.value.length < 1) {
      handleWrongOrNoInput(
        userNameInput,
        "Du behöver fylla i ditt användarnamn!"
      );
    } else if (passwordInput.value.length < 1) {
      handleWrongOrNoInput(passwordInput, "Du behöver fylla i ditt lösenord!");
    } else {
      handleWrongOrNoInput(
        userNameInput,
        "Du har skrivit fel användarnamn eller lösenord! Försök igen!",
        passwordInput
      );
    }
  }
}

function handleWrongOrNoInput(input, message, secondInput) {
  input.classList.add("wrongInput");
  errorMessage.innerText = message;
  loginHolder.appendChild(errorMessage);
  secondInput && secondInput.classList.add("wrongInput");
  //secondInput is checked to see if it is true (not null, undefined, or false).
  //secondInput.classList.add("wrongInput") is executed only if secondInput is true
}

function removeValidationMessage(input) {
  input.classList.remove("wrongInput");
  errorMessage.innerText = "";
}

userNameInput.addEventListener("input", () => removeValidationMessage(userNameInput));
passwordInput.addEventListener("input", () => removeValidationMessage(passwordInput));

//Save user to Local Storage
function saveUserToLS(name) {
  localStorage.setItem("userName", name);
}

function login() {
  if (userNameInput.value == user && passwordInput.value == password) {
    saveUserToLS(userNameInput.value);
    showRightView();
  } else validateLogin();
}

loginBtn.addEventListener("click", () => login());

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("userName");
  showRightView();
});

//stay logged in
function showRightView() {
  localStorage.getItem("userName") ? loggedIn() : notLoggedIn();
  //ternary operator syntax: condition ? expressionIfTrue : expressionIfFalse; same as if else
}
showRightView();
