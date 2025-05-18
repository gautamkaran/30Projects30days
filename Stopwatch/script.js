let stopbtn = document.querySelector("#stopBtn");
let resetbtn = document.querySelector("#resetBtn");
let startbtn = document.querySelector("#startBtn");
let timerDisplay = document.querySelector(".tinerDisplay");

let mins = 0;
let secs = 0;
let msecs = 0;
let timerId = null;
let formet = (unit) => unit.toString().padStart(2, '0');

let startTimer = function () {
    msecs++;
    if (msecs === 100) {
        msecs = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
        if (mins === 60) {
            clearInterval(timerId);
            return;
        }
    }
    timerDisplay.innerHTML = `${formet(mins)} : ${formet(secs)} : ${formet(msecs)}`
}

startbtn.addEventListener("click", function () {
    if (timerId !== null) {
        clearInterval(timerId)
    }
    timerId = setInterval(startTimer, 10)
})
stopbtn.addEventListener("click", function () {
    clearInterval(timerId);
})
resetbtn.addEventListener("click", function () {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    mins = secs = msecs = 0;
})
