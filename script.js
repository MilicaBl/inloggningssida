//Skapa all innehåll 
const header= document.createElement("header")
const main= document.createElement("main")


const footer= document.createElement("footer")
footer.innerText="© 2024 Inloggningssida - All rights reserved"

const loginHolder= document.createElement("div")
const imageHolder=document.createElement("div")
const heading= document.createElement("h1")
heading.innerText="Custom Dried Flower Bouquets"
imageHolder.appendChild(heading)
imageHolder.classList="mainImg"
main.appendChild(imageHolder)
const userNameInput = document.createElement("input");
userNameInput.setAttribute("type", "text");
userNameInput.setAttribute("placeholder", "namn");

const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "lösenord");

const loginBtn = document.createElement("button");
loginBtn.innerText = "Logga in";

loginHolder.appendChild(userNameInput)
loginHolder.appendChild(passwordInput)
loginHolder.appendChild(loginBtn)

header.appendChild(loginHolder)

document.body.appendChild(header)
document.body.appendChild(main)
document.body.appendChild(footer)
