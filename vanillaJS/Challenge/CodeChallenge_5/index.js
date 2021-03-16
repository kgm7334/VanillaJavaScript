const toDoform = document.querySelector(".js-taskform");
const toDoinput = toDoform.querySelector("input");
const PendingList = document.querySelector(".js-PendingList");
const FinList = document.querySelector(".js-FinList");

const TODOS_LS='PENDING';
const FIN_LS='FINISHED';

let pendings =[];
let fins =[];


////////--------CommonFunction
function StartAddTaskProcedure(event){
    event.preventDefault();
    const currentValue = toDoinput.value
    DrawingTaskList(currentValue);
    toDoinput.value="";
}

function DrawingTaskList(text){
  
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    const finBtn=document.createElement("button"); 
    const span = document.createElement("span");
    const newId=pendings.length+1;

    finBtn.innerHTML="✅"
    finBtn.addEventListener("click",GotoFinList)

    delBtn.innerHTML="❌";
    delBtn.addEventListener("click",DeletePendingList);
    span.innerText = text;
    
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finBtn);

    li.id=newId;
    PendingList.appendChild(li);
    const PendingObj={
        text:text,
        id:newId
    }
    pendings.push(PendingObj);
    SaveJsonPendingList();
}

function SaveJsonPendingList(){
    localStorage.setItem(TODOS_LS,JSON.stringify(pendings));
}

function SaveJsonFinishedList(){
    localStorage.setItem(FIN_LS,JSON.stringify(fins));
}
//////////////////////////////////


/////////------- PendingList Button Event
function DeleteFinList(event){
    const btn = event.target;
    const li=btn.parentNode;
    FinList.removeChild(li);
    const cleanfins = fins.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    fins = cleanfins;
 SaveJsonFinishedList();
}

function GotoFinList(event){
    const btn = event.target;
    const li=btn.parentNode;

    li.removeChild(li.childNodes[1]);
    li.removeChild(btn);
    PendingList.removeChild(li);
    const cleanPendings = pendings.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    pendings = cleanPendings;
    SaveJsonPendingList();

    const DelFinBtn = document.createElement("button");
    DelFinBtn.innerHTML="❌"
    DelFinBtn.addEventListener("click",DeleteFinList)

    const GotoPendingBtn = document.createElement("button");
    GotoPendingBtn.innerHTML="⏪"
    GotoPendingBtn.addEventListener("click",GotoPendingList)
    
    li.appendChild(DelFinBtn);
    li.appendChild(GotoPendingBtn);

    FinList.appendChild(li);
    const finsObj={
        text:li.childNodes[0].innerText,
        id:parseInt(li.id)
    }
    fins.push(finsObj);
 SaveJsonFinishedList();
}
/////////////////////////////////////// 


//////////-------FinList Button Event 
function DeletePendingList(event){
    const btn = event.target;
    const li=btn.parentNode;
    PendingList.removeChild(li);
    const cleanPendings = pendings.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    pendings = cleanPendings;
    SaveJsonPendingList();
}

function GotoPendingList(event){
    const btn = event.target;
    const li=btn.parentNode;

    li.removeChild(li.childNodes[1]);
    li.removeChild(btn);
    FinList.removeChild(li);
    const cleanFins = fins.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    fins = cleanFins;
    SaveJsonFinishedList();

    const DelPendingBtn = document.createElement("button");
    DelPendingBtn.innerHTML="❌"
    DelPendingBtn.addEventListener("click",DeletePendingList)

    const GotoFinBtn = document.createElement("button");
    GotoFinBtn.innerHTML="✅"
    GotoFinBtn.addEventListener("click",GotoFinList)
    
    li.appendChild(DelPendingBtn);
    li.appendChild(GotoFinBtn);

    PendingList.appendChild(li);
    const finsObj={
        text:li.childNodes[0].innerText,
        id:parseInt(li.id)
    }
    pendings.push(finsObj);
    SaveJsonPendingList();
    
}
/////////////////////////////////////

function init(){
    localStorage.clear();
    toDoform.addEventListener("submit",StartAddTaskProcedure);
}

init();
