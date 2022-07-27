var dateToday = moment().format("dddd, MMMM Do");

$("#currentDay").text(dateToday);

var time = $(".hour").text();
var timeArray = [];
var newTime;
var inputs = document.querySelectorAll("input");
var schedule = document.querySelector(".schedule");
var userInput = document.querySelector("#what-to-do");
var whatToDo = document.querySelectorAll("#what-to-do").value;
var btN = document.querySelectorAll(".saveBtn");
var description = document.querySelectorAll(".description");
var emptyA = [];

var rightNow = moment();

var newString = JSON.stringify(time);
console.log(newString);
var timeAm = newString.split(/AM|PM|"/);
var newArray = timeAm.slice(1,10);
console.log(newArray);

function start() {

    inputs.textContent = "";

    for (i = 4; i < newArray.length; i ++) {
        newArray[i] = Number(newArray[i]) + 12;
    }
    
    // var randTime = moment().set('hour', 14);
    // console.log(randTime);
    // console.log(inputs);
    
    
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
}




console.log(JSON.stringify(userInput) + " UserInput");

function storeInput(){
    
    
    localStorage.setItem("UserInput", userInput.value());
    console.log(`I was run ${userInput[0]}`);
};

function disItem() {
    for (let index = 0; index < array.length; index++) {
        
        whatToDo = JSON.parse(localStorage.getItem("UserInput"));
    }
    
}

start();

function btnEvent(event) {
    event.preventDefault();
    

    


        var todoText = userInput.value.trim();

        emptyA.push(todoText);
    
        localStorage.setItem("UserInput", JSON.stringify(todoText));
        userInput.textContent = JSON.parse(localStorage.getItem("UserInput"));
        console.log(`I was run ${JSON.stringify(todoText)}`);
    
}

for (let index = 0; index < btN.length; index++) {
    btN[index].addEventListener("click", btnEvent);
}


// console.log(newTime);




