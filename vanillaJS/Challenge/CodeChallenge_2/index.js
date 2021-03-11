var Body_BackgroundColor = [];

Body_BackgroundColor[2]="rgb(255, 204, 0)"; //yellow
Body_BackgroundColor[1]="rgb(155, 89, 182)"; //purple
Body_BackgroundColor[0]="rgb(0, 102, 255)"; //blue

const body=document.querySelector("body");

function windowResizeColor(){
    
    let WindowWidth =window.innerWidth;
 
    if(WindowWidth < 700){
        body.style.backgroundColor = Body_BackgroundColor[0];
    }
    else if(WindowWidth>=700 && WindowWidth<900){
        body.style.backgroundColor = Body_BackgroundColor[1];
    }
    else
    {
        body.style.backgroundColor = Body_BackgroundColor[2];    
    }

}

function init() {
    
    const HelloText = document.querySelector(".HelloText");
    HelloText.innerHTML = "Hello";
    HelloText.style.color = "rgb(255, 255, 255)"; 

    window.addEventListener("resize",windowResizeColor);
}

init();