var dateToday = moment().format("dddd, MMMM Do");

$("#currentDay").text(dateToday);

var time = $(".hour").text();
var timeArray = [];
var newTime;
var inputs = document.querySelectorAll("input");
var schedule = document.querySelector(".schedule");
var userInput = document.querySelector("#what-to-do").value;
var whatToDo = document.querySelector("#what-to-do").value;
var btn = $(".saveBtn");
var description = document.querySelectorAll(".description");


console.log(time);

// var timeAm = time.split(/AM|PM/);
// timeArray.push(timeAm);
// // var timepm = time.split("");
// console.log(timeArray);
// console.log(timeArray.length);

var newString = JSON.stringify(time);
console.log(newString);
var timeAm = newString.split(/AM|PM|"/);
var newArray = timeAm.slice(1,10);
console.log(newArray);


for (i = 4; i < newArray.length; i ++) {
    newArray[i] = Number(newArray[i]) + 12;
}

// var randTime = moment().set('hour', 14);
// console.log(randTime);
// console.log(inputs);
var rightNow = moment();

console.log(rightNow);

console.log("yes" + newArray);

for (i = 0; i < newArray.length; i++) {
    var newTime = moment().set('hour', newArray[i]);
    
    console.log(newTime);

    if (newTime.isBefore(rightNow)){
        inputs[i].classList.add("past");
    } else if (newTime.isAfter(rightNow)) {
            inputs[i].classList.add("future");
         } else {
            inputs[i].classList.add("present");
         }
}

// for (i = 0; i < newArray.length; i++) {
//     newTime = moment().set('hour', newArray[i]);
//     console.log(newTime);
//     if(newTime.isBefore(randTime, "hour")){
//         description[i].classList.add("past");
//      } else if (newTime.isAfter(randTime, "hour")) {
//          description[i].classList.add("future");
//      } else {
//         description[i].classList.add("present");
//      }
// }

schedule.addEventListener("click", local); 

function local(){
    localStorage.setItem("UserInput", userInput);
    console.log("I was run");
};

// console.log(newTime);




