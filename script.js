const user="test"
const password="1234"
//Skapa all innehåll 
const header= document.createElement("header")
const main= document.createElement("main")
const footer= document.createElement("footer")
footer.innerText="© 2024 Inloggningssida - All rights reserved"

const loginHolder= document.createElement("div")

const myProfileHolder=document.createElement("div")
const myProfile= document.createElement("h1")
myProfile.innerText="My Profile"
myProfileHolder.appendChild(myProfile)
myProfileHolder.classList="myProfileImg"

const myOrdersHolder=document.createElement("div")
const myOrders= document.createElement("h1")
myOrders.innerText="Order History"
myOrdersHolder.appendChild(myOrders)
myOrdersHolder.classList="myOrdersImg"

const imageHolder=document.createElement("div")
const heading= document.createElement("h1")
heading.innerText="Custom Dried Flower Bouquets"

imageHolder.appendChild(heading)
imageHolder.classList="mainImg"
main.appendChild(imageHolder)

const userNameInput = document.createElement("input");
userNameInput.setAttribute("type", "text");
userNameInput.setAttribute("placeholder", "användarnamn");

const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "lösenord");

const loginBtn = document.createElement("button");
loginBtn.innerText = "Logga in";

loginHolder.appendChild(userNameInput)
loginHolder.appendChild(passwordInput)
loginHolder.appendChild(loginBtn)

const userName=document.createElement("p")
const logoutBtn = document.createElement("button");
logoutBtn.innerText = "Logga ut";
const profileHolder=document.createElement("div")
profileHolder.appendChild(userName)
profileHolder.appendChild(logoutBtn)




document.body.appendChild(header)
document.body.appendChild(main)
document.body.appendChild(footer)
//vad visas när man inte är inloggad
function notLoggedIn(){
    userNameInput.value=""
    passwordInput.value=""
    header.append(loginHolder)
}
notLoggedIn()
//vad visas när man är inloggad
function loggedIn(){
    userName.innerText="Välkommen" +" "+ userNameInput.value
    header.removeChild(loginHolder)
    header.appendChild(profileHolder)
    main.appendChild(myOrdersHolder)
    main.appendChild(myProfileHolder)
}
//vad visas när man skriver fel användarnamn eller lösenord
function login(){
   if(userNameInput.value==user && passwordInput.value==password){
    loggedIn()
   }else notLoggedIn()
}

loginBtn.addEventListener("click",() =>login())
logoutBtn.addEventListener("click",function(){
    header.removeChild(profileHolder)
    notLoggedIn()
});