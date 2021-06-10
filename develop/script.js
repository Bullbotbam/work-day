var today = new Date();
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
