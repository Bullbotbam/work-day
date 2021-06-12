// the current date and time
const today = moment().format("dddd, MMMM Do YYYY, h:mm A");
document.getElementById("currentDay").innerHTML = today;

// variables to create hour div and childElements
const body = document.body;
const divHour = document.querySelector("#hour1");
const divTime = document.querySelector("time");
const inputNote = document.querySelector("description");
const saveBtn = document.querySelector("saveBtn");
let scheduleHours = $("#container").append(
  divHour,
  divTime,
  inputNote,
  saveBtn
);

// get current hour
var timeIsNow = function () {
  var currentHour = moment().hour();
  console.log(currentHour);
  // loop thorugh an array of objects (time: <value>, notes: <value>), save objects, skip if null
  $(".time-block").each(function () {
    var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
    // if note is post-active during current hour background-color: gray and disable input;

    if (timeHour < currentHour) {
      // grey out
      div.classList.add("past");
      div.classList.remove("present");
      div.classList.add("future");
    } // if note is active during current hour background-color: red and enable input;
    else if (timeHour == currentHour) {
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
  });
  // set results of array to localStorage
};

// function(saveNotes){
//   if(inputNote.value){

//   }

// }
// saveBtn.addEventListener("click", saveNotes);

let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

const eventInput = events.find((e) => e.hour === clicked);
