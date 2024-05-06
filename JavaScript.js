//Create and call a JavaScript function that keeps track of the current day and time
function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours =hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timestring = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("Clock").textContent = timestring;
}

//Send an alert using JavaScript
//Delay one command or run a command at a specified interval
updateClock();
setInterval(updateClock, 1000);

setTimeout(function() {
    alert("Emergency Alert- A Lizards has been Kipnapped, last seen in Charlotte,NC");
    }, 3000);
//Include a countdown function
const startingMinutes =  10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('Countdown');
setInterval(updatecountdown, 1000);
//Use a Math method
function updatecountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

}