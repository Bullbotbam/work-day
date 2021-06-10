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
// if note is active during current hour background-color: red and disable input;
// if note is post-active during current hour background-color: gray and enable input;
// if note is pre-active during current hour background-color: green and enable input;
// loop thorugh an array of objects (time: <value>, notes: <value>), save objects, skip if null
// set results of array to localStorage
