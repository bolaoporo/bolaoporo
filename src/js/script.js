setInterval(showTime, 1000);
window.onload = function () {
    showDate();
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

showDate = () => {
    let time = new Date();
    let dayOfWeek = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();

    let nameOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let nameOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let numberOrder;
    switch (date) {
        case 1:
            numberOrder = date + "<sup>st</sup>";
            break;
        case 2:
            numberOrder = date + "<sup>nd</sup>";
            break;
        case 3:
            numberOrder = date + "<sup>rd</sup>";
            break;
        default:
            numberOrder = date + "<sup>th</sup>";
            break;
    }

    let currentDate = nameOfDays[dayOfWeek] + ", " +
        nameOfMonths[month] + " " +
        numberOrder + ", " +
        year;

    document.getElementById("calendar")
        .innerHTML = currentDate;
}