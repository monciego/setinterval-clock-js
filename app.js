const dialLines = document.getElementsByClassName("diallines");
const clock = document.getElementsByClassName("clock")[0];

for (let i = 1; i <= 60; i++) {
  clock.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

// grabbing elements from the DOM
const secondHand = document.querySelector(".clock-secondhand");
const minuteHand = document.querySelector(".clock-minutehand");
const hourHand = document.querySelector(".clock-hourhand");

// initialize a value that will start in 0
let secondHandRotation = 0;
let minuteHandRotation = 0;
let hourHandRotation = 0;

// run every millisecond
let secondHandInteval = setInterval(second, 1000);
let minuteHandInterval = setInterval(minute, 60000);
let hourHandInterval = setInterval(hour, 3600000);

// function that will iterate every 1000ms = 1s
function second() {
  secondHandRotation++;
  // we need 360 degrees from our seconds value, so 360/60=6.
  // totalDegreeSecond is the product of iteration of secondHandRotation and 6.
  // if we have a 60 iteration of secondHandRotation we multiply it by 6, product will be 360/360deg
  totalDegreeSecond = secondHandRotation * 6;
  secondHand.style.transform = `rotate(${totalDegreeSecond}deg)`;
}

// function that will iterate every 60000 = 1m
function minute() {
  minuteHandRotation++;
  totalDegreeMinute = minuteHandRotation * 6;
  minuteHand.style.transform = `rotate(${totalDegreeMinute}deg)`;
}

// function that will iterate every 3600000 = 1h
function hour() {
  hourHandRotation++;
  totalDegreeHour = hourHandRotation * 6;
  hourHand.style.transform = `rotate(${totalDegreeHour}deg)`;
}
