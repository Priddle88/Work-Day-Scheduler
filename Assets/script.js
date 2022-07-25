var dateToday = moment().format("dddd, MMMM Do");

$("#currentDay").text(dateToday);

var time = document.querySelector(".hour").textContent;
var description = document.querySelector(".description");

console.log(time);
var newTime = moment().hour(time).minute("0");

console.log(newTime);

if(newTime.isBefore()){
    description.classList.add("past");
}