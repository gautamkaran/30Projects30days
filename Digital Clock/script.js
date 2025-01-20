const setHour = document.querySelector("#hour");
const setMinute = document.querySelector("#minite");
const setSecond = document.querySelector("#second");
const setAmpm = document.querySelector("#ampm");

function updateClock() {
  let getDate = new Date();
  let getHours = getDate.getHours();
  let getMinutes = getDate.getMinutes();
  let getSeconds = getDate.getSeconds();
  let getAmpm = "AM";

  if (getHours > 12) {
    getHours -= 12;
    getAmpm = "PM";
  }

  getHours = getHours < 10 ? `0${getHours}` : getHours;
  getMinutes = getMinutes < 10 ? `0${getMinutes}` : getMinutes;
  getSeconds = getSeconds < 10 ? `0${getSeconds}` : getSeconds;

  setHour.innerText = getHours;
  setMinute.innerText = getMinutes;
  setSecond.innerText = getSeconds;
  setAmpm.innerText = getAmpm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
