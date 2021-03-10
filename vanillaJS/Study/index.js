/*
const GangMinInfo={
    name:"KimGangMin",
    age:33,
    gender:"Male",
    isHandSome:true,
    Favmovies:["Victory","Gundam","Bitcoin"],
    FavFood:
    [
        {
            name:"kimchi",
            age:12,
            Fatty:false
        },
        {
            name:"Hamburger",
            age:13,
            Fatty:true
        }
    ]
}

//alert(GangMinInfo.age);
console.log(GangMinInfo.FavFood[0].age);
/////////////////////////////////////////////////////////////////////////////////////////////
function SayHello(name,age){
    //console.log("Hello"+name+'you are'+age +"years old");
    //"" '' `` 전부 다른거임
    //console.log(`Hello ${name} you are ${age} years old`);
    return `Hello ${name} you are ${age} years old`;
}

//SayHello("GangMin",31);

const greetGangmin = SayHello("gangmin",31)
console.log(greetGangmin)

const calculator = {
    plus:function (a,b) {
        return a+b;
    }
}

console.log(calculator.plus(5,5));
/////////////////////////////////////////////////////////////////////////////////////////////

const title =document.getElementById("title");

console.log(title.localName);

const title = document.querySelector("#title");

function handleClick() {
    title.style.color ="blue";
}

title.addEventListener("click",handleClick)*/
//////////////////////////////////////////////////////////////////////////////////////////////

/*
const title =document.querySelector("#title");

const BASE_COLOR="rgb(0, 255, 255)";
const OTHER_COLOR ="#7f8c8d";

function HandleClick() {
    const currentColor=title.style.color;
      
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else
    {
        title.style.color = BASE_COLOR;    

    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mousenter",HandleClick);    
}
init();*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

/*
function handleClick() {
    const hasClass=title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }
    else{
        title.classList.add(CLICKED_CLASS);
    }
}*/

function handleClick() {
   title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click",handleClick);    
}

init();