var Dday_ms = new Date("December 24, 2021, 0:00:00").getTime();

function UpdateTime(){
    var Today_ms= new Date().getTime();
    var RemainDay_ms = Dday_ms - Today_ms;
    var Day = Math.ceil(RemainDay_ms/(1000*60*60*24));  //1000ms = 1s ->86400s = 1day = 24hour = (86400 x 1000)ms = 1day 
    var Hour = Math.floor((RemainDay_ms%(1000*60*60*24))/(1000*60*60));
    var Min = Math.ceil((RemainDay_ms%(1000*60*60))/(1000*60));
    var Sec = Math.floor((RemainDay_ms%(1000*60))/1000);
    document.querySelector(".D-day").innerHTML = Day +"d"+" "+ Hour + "h" +" "+ Min + "m"+" "+ Sec + "s";
}

function init(){
    UpdateTime();
    setInterval(UpdateTime,1000);
}

init();