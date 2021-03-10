
const transFormText = document.querySelector(".transFormText");
var transFormText_COLOR = [];

transFormText_COLOR[0]="rgb(255, 0, 255)"; //purple
transFormText_COLOR[1]="rgb(255, 102, 0)"; //Orange
transFormText_COLOR[2]="rgb(0, 204, 102)"; //green
transFormText_COLOR[3]="rgb(0, 153, 255)"; //blue
transFormText_COLOR[4]="rgb(0, 0, 0)";//black

const superEventHandler = {

    handleWindowResize: function () {
        transFormText.style.color = transFormText_COLOR[0];
        transFormText.innerHTML = "It is Resized!";
    },
    handleWindowRightClick: function () {
        transFormText.style.color = transFormText_COLOR[1];
        transFormText.innerHTML = "You just Right clicked!";
    },


    handleTextMouseEnter: function () {
        transFormText.style.color = transFormText_COLOR[2];
        transFormText.innerHTML = "Pointer is on it";
    },
    handleTextMouseLeave: function () {
        transFormText.style.color = transFormText_COLOR[3];
        transFormText.innerHTML = "Pointer is gone!";
    }
  };


function init() {

    transFormText.innerHTML = "Hello";
    transFormText.style.color = transFormText_COLOR[4]; 

    window.addEventListener("resize", superEventHandler.handleWindowResize);
    window.addEventListener("contextmenu", superEventHandler.handleWindowRightClick);

    transFormText.addEventListener("mouseenter", superEventHandler.handleTextMouseEnter);
    transFormText.addEventListener("mouseleave", superEventHandler.handleTextMouseLeave); 
}

init();