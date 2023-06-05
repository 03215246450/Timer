// Stop Watch======================
// Stop Watch======================
// Stop Watch======================
// Stop Watch======================


// var hour = 0
// var min= 0
// var sec = 0
// var timer = false


// function start(){
//   document.getElementById("start").disabled = true;  
//   document.getElementById("stop").disabled = false; 
//     timer = true
//     stopWatch()
// }

// function stop(){ 
//   document.getElementById("stop").disabled = true;    
//     document.getElementById("start").disabled = false;
//     timer = false
// }

// function reset(){   
//   timer = false
//   sec = 0; min = 0; hour = 0;
//   document.getElementById("seconds").innerHTML = "00"
//   document.getElementById("minutes").innerHTML = "00"
//   document.getElementById("hour").innerHTML = "00"
// }

// function stopWatch(){
//     if(timer == true){
//         sec = sec+1
//         if(sec == 60){
//             min = min+1
//             sec = 0
//         }
//        if(min == 60){
//         hour = hour+1
//         min = 0
//        }
//         setTimeout("stopWatch()", 1000)
//         document.getElementById("seconds").innerHTML = sec 
//         document.getElementById("minutes").innerHTML = min 
//         document.getElementById("hour").innerHTML = hour
//     }
// }



// Timer====================================
// Timer====================================
// Timer====================================


// var hour = 0;
// var min = 0;
// var sec = 0;
// var timer = false;

// function start() {
//   timer = true;
//   stopWatch();
// }

// function stop() {
//   timer = false;
// }

// function reset() {
//   timer = false;
//   sec = 0;
//   min = 0;
//   hour = 0;
//   document.getElementById("seconds").innerHTML = "00";
//   document.getElementById("minutes").innerHTML = "00";
//   document.getElementById("hour").innerHTML = "00";
// }

// function stopWatch() {
//   if (timer == true) {
//     sec = sec - 1;
//     if (sec == -1) {
//       min = min - 1;
//       sec = 59;
//     }
//     if (min == -1) {
//       hour = hour - 1;
//       min = 59;
//     }
//     if (hour == -1) {
//       timer = false; // Stop the timer when hour reaches -1
//     }
//     setTimeout(stopWatch, 1000);
//     document.getElementById("seconds").innerHTML = sec
//     document.getElementById("minutes").innerHTML = min
//     document.getElementById("hour").innerHTML = hour
//   }
// }

// // Prompt the user for initial values
// var initialHour = prompt("Enter initial hours:");
// var initialMin = prompt("Enter initial minutes:");
// var initialSec = prompt("Enter initial seconds:");

// // Parse the input values as integers
// hour = parseInt(initialHour) 
// min = parseInt(initialMin) 
// sec = parseInt(initialSec) 

// // Update the display with the initial values
// document.getElementById("seconds").innerHTML = sec
// document.getElementById("minutes").innerHTML = min
// document.getElementById("hour").innerHTML = hour 




var sec = 0;
var min = 0;
var hour = 0;

var secval = document.getElementById("seconds");
var minval = document.getElementById("minutes");
var hourval = document.getElementById("hour");

var interval;

function renderVal() {
    secval.textContent = sec 
    minval.textContent = min 
    hourval.textContent = hour;
}

function setInitialValues() {
    sec = parseInt(prompt("Enter initial seconds:"));
    min = parseInt(prompt("Enter initial minutes:"));
    hour = parseInt(prompt("Enter initial hours:"));
    renderVal();
}

function start() {
    document.getElementById("startbtn").disabled = true;
    document.getElementById("stopbtn").disabled = false;

    interval = setInterval(function () {
        if (sec === 0 && min === 0 && hour === 0) {
            stop();
            return;
        }

        sec--;
        if (sec === -1) {
            sec = 59;
            min--;
            if (min === -1) {
                min = 59;
                hour--;
                if (hour === -1) {
                    hour = 11;
                }
            }
        }
        renderVal();
    }, 1000);
}

function stop() {
    document.getElementById("stopbtn").disabled = true;
    document.getElementById("startbtn").disabled = false;

    clearInterval(interval);
}

function reset() {
    stop();
    setInitialValues();
}

setInitialValues();