var dateToday = moment().format("dddd, MMMM Do");

$("#currentDay").text(dateToday);

var time = $(".hour").text();
var timeArray = [];
var newTime;
var inputs = document.querySelectorAll("input");
var schedule = document.querySelector(".schedule");
// var userInput = document.querySelector("#what-to-do").value;
var whatToDo = document.querySelectorAll("#what-to-do");
var btN = document.querySelectorAll(".saveBtn");
var description = document.querySelectorAll(".description");
var labels = document.querySelectorAll(".hour");
var emptyA = [];

var rightNow = moment();

var newString = JSON.stringify(time);
console.log(newString);
var timeAm = newString.split(/AM|PM|"/);
var newArray = timeAm.slice(1,10);
console.log(newArray);

function start() {

    for (i = 4; i < newArray.length; i ++) {
        newArray[i] = Number(newArray[i]) + 12;
    }
    
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
resetList();
start();

for (let index = 0; index < btN.length; index++) {
    btN[index].addEventListener("click", inputToDo);
}

// console.log(JSON.stringify(userInput) + " UserInput");

// function storeInput(){
    
    
//     localStorage.setItem("UserInput", userInput.value());
//     console.log(`I was run ${userInput[0]}`);
// };

// function disItem() {
//     for (let index = 0; index < userInput.length; index++) {
        
//         whatToDo = JSON.stringify(localStorage.getItem("UserInput"));
//     }
    
// }



// function btnEvent(event) {
//     event.preventDefault();
    

//         var todoText = event.target.userInput.value.trim();

//         emptyA.push(todoText);
//         console.log(emptyA + " :Empty A");
    
//         // localStorage.setItem("UserInput", userInput.value);
//         disItem();
//         // userInput.textContent = localStorage.getItem("UserInput");
//         console.log(`I was run ${JSON.stringify(todoText)}`);
//         console.log("Value: " + userInput.value);

//         // for (let index = 0; index < emptyA.length; index++) {
//         //     inputs[index].classList.add("removeIt");
//         //     var createNew = document.createElement("p");
//         //     createNew.textContent = JSON.stringify(localStorage.getItem("UserInput"));
//         //     labels[i].appendChild(createNew);
//         // }
        

        
//         inputs.value = "";
// }

// for (let index = 0; index < btN.length; index++) {
//     btN[index].addEventListener("click", btnEvent);
// }


// console.log(newTime);




