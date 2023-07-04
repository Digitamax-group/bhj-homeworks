const count = document.getElementById('timer')
const count2 = document.getElementById('timer2')
secondsAdd = Number(count.textContent);
xIntervalID = setInterval(() => {
    secondsAdd -= 1
    hours = Math.floor(secondsAdd/3600);
    minutes = Math.floor((secondsAdd - hours *3600) / 60)
    seconds = secondsAdd - hours * 3600 - minutes * 60;
    count.textContent = secondsAdd

    hoursPrint = ('0' + hours + ':').slice(-3)
    minutesPrint = ('0' + minutes + ':').slice(-3)
    secondsPrint = ('0' + seconds).slice(-2)
    count2.textContent = hoursPrint + minutesPrint + secondsPrint

    console.log(hoursPrint + minutesPrint + secondsPrint);

    if (secondsAdd <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(xIntervalID);
    }
}, 1000)