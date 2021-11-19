let time = 0;
let timeid = 0;
let timeOut = true;

const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const timer = document.querySelector("#time-display");

const initClock =() => {

    timeOut = false;
    timeid = setInterval(() => {
        time++;
        timeCount();
    },1000);


};

const timeCount =() => {

const min =Math.floor(time/60);
const sec = time % 60 ;
if (sec <10) {
    timer.lnnerHTML = '${min}:0${sec}';
} else {
    timer.lnnerHTML = '${min}:${sec}';
}

}

const stopClock =() => {

clearInterval(timeid);

}

start.addEventListener("click",function()){
    if (timeOut){
      initClock();   
    }
   

}

reset.addEventListener("click",function()){

    stopClock();
    timeOut = true;
    time = 0 ;
    timeCount ();
}