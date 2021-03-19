const ButtonCollection = document.querySelectorAll("button");
const input = document.querySelector(".Input-ShowResult");

let result = "";
let Is_Available_Status_Input_OP = false; //입력값에 연산자가 가능한지여부 체크
let Is_Avaliable_Status_Input_number = true;


function displayNumber(number) {
  Is_Available_Status_Input_OP = true;
  const current = input.value;

  if (Is_Avaliable_Status_Input_number) {
    input.value = current === "0" ? number : input.value + number;
  } 
  else {
    input.value = number;
    Is_Avaliable_Status_Input_number = true;
  }
  result += number;
   
}

function calc() {
  
  if (input.value === "0") return;

  if(result.charAt(0)==="*"||result.charAt(0)==="/") result=result.substr(0);

  if (Is_Available_Status_Input_OP) {
      
    input.value = `${eval(result)}`;

    Is_Available_Status_Input_OP = true;
  }
    
}

function insert_op(oper) {
  if (Is_Available_Status_Input_OP) {
    Is_Available_Status_Input_OP = false;
    result += oper;
    Is_Avaliable_Status_Input_number = false;
  } 
  else {
    return;  
  }
}

function allclear() {
  input.value = 0;
  result = "";
  //Is_Available_Status_Input_OP = false;
}

function clickButton(event){
    const Button = event.target;

    switch (Button.dataset.type) {

        case "op":
        const oper = Button.innerText;
        insert_op(oper);
        break;

        case "ac":
        allclear();
        break;

        case "equal":
        calc();
        break;

        default:
        const number = Button.innerText;
        displayNumber(number);
        break;
    }
}


function init() {

    ButtonCollection.forEach(function(Button){
      Button.addEventListener("click",clickButton);
    });
  
}

init();