const RangeTitle = document.querySelector(".Range-Title");
const PlayButton = document.querySelector(".js-PlayButton");
const InputRange = document.querySelector(".js-InputRange");
const InputNumber = document.querySelector(".js-InputNumber");
const ResultText = document.querySelector(".Result-Text");
const ResultText2 = document.querySelector(".Result-Text2");
let firstinitflag = true;

function ChangedInputRange(event){
    const RangeValue = InputRange.value;
    RangeTitle.innerText =`Generate a number between 0 and ${RangeValue}`;
}

function StartResultProcedure(){

    if(Number(InputNumber.value) == ""){
        ResultText.innerText="";
        ResultText2.innerText="";
        return;
    } 
    else{
        const RandomNumber = Math.ceil(Math.random()*InputRange.value); 

        ResultText.innerText=`You Chose: ${InputNumber.value},the machine chose: ${RandomNumber}.`;

        if(parseInt(InputNumber.value)===parseInt(RandomNumber)){
            ResultText2.innerText=`You won!`;
        }
        else{
            ResultText2.innerText=`You lost`;
        }
       
    }
}

function init(){
    if(firstinitflag) {
        RangeTitle.innerText =`Generate a number between 0 and ${InputRange.value}`;
        firstinitflag=false;    
    }
    
    InputRange.addEventListener("input",ChangedInputRange);
    PlayButton.addEventListener("click",StartResultProcedure);
}

init();