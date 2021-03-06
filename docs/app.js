const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const countdown = document.getElementById("countdown")

const currentYear = new Date().getFullYear();
const newYear = new Date(`January 01 ${currentYear+1} 00:00:00`);

function updateCountDown(){
    const currentTime = new Date();
    const sum = newYear-currentTime;
    const d = Math.floor(sum/1000/60/60/24)
    const h = Math.floor(sum/1000/60/60%24)
    const m = Math.floor(sum/1000/60)%60
    const s = Math.floor(sum/1000)%60
    days.innerHTML = d<10?'0' +d:d;
    hours.innerHTML = h<10?'0' +h:h;
    minutes.innerHTML = m<10?'0' +m:m;
    seconds.innerHTML = s<10?'0' +s:s;
}

setInterval(updateCountDown,1000);