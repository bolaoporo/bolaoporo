setInterval(showTime, 1000);
window.onload = function () {
    showTime();
};
var ticktack = 1;
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    let currentTime;

    if (ticktack == 0) {
        currentTime = hour + "\xa0 \xa0" + min + " " + am_pm;
        ticktack = 1;
    } else {
        currentTime = hour + " : " + min + " " + am_pm;
        ticktack = 0;
    }
    document.getElementById("clock")
        .innerHTML = currentTime;
}
showTime();