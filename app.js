function displayTime() {
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var period = document.getElementById("period");

    if (hr >= 12) {
        period.innerHTML = "PM";
    }

    if (hr > 12) {
        hr -= 12;
    }

    document.getElementById("hour").innerHTML = hr;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;

}

setInterval(displayTime, 10);

let seconds = 00;
let tens = 00;
let interval;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let OutputSecond = document.getElementById("seconds");
let Outputten = document.getElementById("tens");

start.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTime, 100);   
})

stop.addEventListener("click", () => {
    clearInterval(interval);

    start.innerHTML = "Resume";
    
 })

reset.addEventListener("click", () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    OutputSecond.innerHTML = seconds;
    Outputten.innerHTML = tens;
    start.innerHTML = "Start"
})

startTime = () => {
    tens++;
    if (tens <= 9) {
        Outputten.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        Outputten.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        OutputSecond.innerHTML = "0" + seconds;
        tens = 0;
        Outputten.innerHTML = "0" + tens;
    }

    if (seconds > 9) {
        OutputSecond.innerHTML =seconds;
    }

}

