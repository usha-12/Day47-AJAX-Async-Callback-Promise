function showTime(){
    const date = new Date();
    return date.getHours + " Hrs, " + date.getMinutes + " Min " + date.getSeconds() + "Secs";
}

function showSessionExpire(){
    console.log("Activity-B: your session expire at " + showTime());
}

console.log("Activity-A triggering Activity-B at " + showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A trigged Activity-B at " + showTime());