//selector

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");











//functions

function showtime() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todayDate = today.toDateString();
    const amPm = hr > 12 ? 'PM' : "AM";
    hr = hr % 12 || 12;
    time.innerHTML = `${addzero(hr)}<span>:</span>${addzero(min)}<span>:</span>${addzero(sec)} ${amPm}`;
    date.innerHTML = `${todayDate}`;
    setTimeout(showtime, 1000);
}
// -------------------------
function addzero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
// --------------------------
function dynamicgreeting() {
    let today = new Date();
    let hour = today.getHours();
    console.log(hour);
    if (hour < 12) {
        greeting.innerHTML = "Good Morning";
        document.body.style.backgroundImage = 'url(../../images/morning.jpg)';
    } else if (hour < 16) {
        document.body.style.backgroundImage = 'url(../../images/noon.jp3g)';
        greeting.innerHTML = "Good Afternoon";
    } else if (hour < 19) {
        document.body.style.backgroundImage = 'url(../../images/evening.png)';
        greeting.innerHTML = "Good Evening";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundImage = 'url(../../images/night.jpj)';
        greeting.innerHTML = "Good night";
        document.body.style.color = "white";
    }
}
// -------------------------------------------
function getname() {
    if (localStorage.getItem('myname') === null) {
        name.innerHTML = "[Enter Name]";
    } else {
        name.innerHTML = localStorage.getItem('myname');
    }
}
// -----------------------------
function setname(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem('myname', e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem('myname', e.target.innerHTML);
    }
}

//function call
dynamicgreeting();
showtime();
getname();
//event listener

name.addEventListener('keypress', setname);
name.addEventListener('blur', setname);