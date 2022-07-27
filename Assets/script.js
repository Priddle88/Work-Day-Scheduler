//Grabs the date of today in the format of Day, Month and the day of the month
var dateToday = moment().format("dddd, MMMM Do");
//Changes the text to the date of today
$("#currentDay").text(dateToday);

//List of variables for multiple reasons
var time = $(".hour").text();
var timeArray = [];
var newTime;
var inputs = document.querySelectorAll("input");
var schedule = document.querySelector(".schedule");
var whatToDo = document.querySelectorAll("#what-to-do");
var btN = document.querySelectorAll(".saveBtn");
var description = document.querySelectorAll(".description");
var labels = document.querySelectorAll(".hour");
var emptyA = [];
var rightNow = moment();
var newString = JSON.stringify(time);
var timeAm = newString.split(/AM|PM|"/);
var newArray = timeAm.slice(1,10);

//function to change the color of the sections depending on the time
//Starts when page is loaded
function start() {
    //Loop to go through the numbers after noon and changing them to military time
    for (i = 4; i < newArray.length; i ++) {
        newArray[i] = Number(newArray[i]) + 12;
    }

    //Checks to see is the time on the schedule is before, after or during the present time
    for (i = 0; i < newArray.length; i++) {
        var newTime = moment().set('hour', newArray[i]);
        
        console.log(newTime);
        
        if (newTime.hour() < rightNow.hour()){
            inputs[i].classList.add("past");
        } else if (newTime.hour() == rightNow.hour()) {
            inputs[i].classList.add("present");
        } else {
            inputs[i].classList.add("future");
        }
    }
    
}

//function that is way longer than it should be. This add the inputs of the user to the local storage
function inputToDo(event) {

    event.preventDefault();

    var userInput1 = document.querySelector("#what-to-do-1").value;
    var userInput2 = document.querySelector("#what-to-do-2").value;
    var userInput3 = document.querySelector("#what-to-do-3").value;
    var userInput4 = document.querySelector("#what-to-do-4").value;
    var userInput5 = document.querySelector("#what-to-do-5").value;
    var userInput6 = document.querySelector("#what-to-do-6").value;
    var userInput7 = document.querySelector("#what-to-do-7").value;
    var userInput8 = document.querySelector("#what-to-do-8").value;
    var userInput9 = document.querySelector("#what-to-do-9").value;

    localStorage.setItem("todo-1", JSON.stringify(userInput1));
    localStorage.setItem("todo-2", JSON.stringify(userInput2));
    localStorage.setItem("todo-3", JSON.stringify(userInput3));
    localStorage.setItem("todo-4", JSON.stringify(userInput4));
    localStorage.setItem("todo-5", JSON.stringify(userInput5));
    localStorage.setItem("todo-6", JSON.stringify(userInput6));
    localStorage.setItem("todo-7", JSON.stringify(userInput7));
    localStorage.setItem("todo-8", JSON.stringify(userInput8));
    localStorage.setItem("todo-9", JSON.stringify(userInput9));


}

//Function that uses the local storage to keep the inputs of the user when the page is reloaded
function resetList() {
    document.querySelector("#what-to-do-1").value = JSON.parse(localStorage.getItem("todo-1"));
    document.querySelector("#what-to-do-2").value = JSON.parse(localStorage.getItem("todo-2"));
    document.querySelector("#what-to-do-3").value = JSON.parse(localStorage.getItem("todo-3"));
    document.querySelector("#what-to-do-4").value = JSON.parse(localStorage.getItem("todo-4"));
    document.querySelector("#what-to-do-5").value = JSON.parse(localStorage.getItem("todo-5"));
    document.querySelector("#what-to-do-6").value = JSON.parse(localStorage.getItem("todo-6"));
    document.querySelector("#what-to-do-7").value = JSON.parse(localStorage.getItem("todo-7"));
    document.querySelector("#what-to-do-8").value = JSON.parse(localStorage.getItem("todo-8"));
    document.querySelector("#what-to-do-9").value = JSON.parse(localStorage.getItem("todo-9"));
}

//Calling of the two functions for when the page loads
//Resets the local storage
resetList();
//Mkaes sure the blocks are the right color depending on the current time
start();

//Loop to add an event listener to all the buttons on the page
for (let index = 0; index < btN.length; index++) {
    btN[index].addEventListener("click", inputToDo);
}



