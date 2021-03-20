const form=document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const InitButton = document.querySelector(".initButton");

const USER_LS = "currentUser"
const SHOWING_CN ="showing"

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSumbmit(event){
    event.preventDefault();
    const currentValue=input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSumbmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hi~ 😉 ${text}님 오늘의 할일을 확인하세요 ✔🧾`;
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser===null){
        askForName();
    }
    else{
       paintGreeting(currentUser); 
    }
}

function InitButtonClick(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser===null){
        return;
    }
    else{
        localStorage.removeItem(USER_LS);
        window.location.reload();
    }
    
}


function init(){
    InitButton.addEventListener("click",InitButtonClick)
    loadName();
}

init();