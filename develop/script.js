// the current date and time
var today = moment().format("dddd, MMMM Do YYYY, h:mm A");
// var date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDay();
document.getElementById("currentDay").innerHTML = today;
$(document).ready(function () {
  // variables to create hour div and childElements
  const body = document.body;
  const divHour = document.querySelector("#hour1");
  const divTime = document.querySelector("time");
  const inputNote = document.querySelector("description");
  const saveBtn = document.querySelector("saveBtn");

  // function fillArray(value, len) {
  //     var arr = [];
  //     for (var i = 0; i < len; i++) {
  //       arr.push(value);
  //     }
  //     return arr;
  //   }

  $("#container").append(divHour, divTime, inputNote, saveBtn);
});

// get current hour
TimeIsNow = function () {
  var currentHour = moment().hour();
  console.log(currentTime);
  // if note is post-active during current hour background-color: gray and disable input;

  if (timeBlock < currentHour) {
    // grey out
    div.classList.add("past");
    div.classList.remove("present");
    div.classList.add("future");

  } // if note is active during current hour background-color: red and enable input;
 
  else if (timeBlock == currentHour) {
    div.classList.add("present");
    div.classList.remove("past");
    div.classList.remove("future");
  }
  // if note is pre-active during current hour background-color: green and enable input;
  else {
    div.classList.add("future");
    div.classList.remove("past");
    div.classList.remove("present");
  }
 
   // loop thorugh an array of objects (time: <value>, notes: <value>), save objects, skip if null
  // set results of array to localStorage
};
document.addEventListener("click",function())