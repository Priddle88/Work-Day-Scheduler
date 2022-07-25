var dateToday = moment().format("dddd, MMMM Do");

$("#currentDay").text(dateToday);

var time = $(".hour").text();
var inputs = $(".inputs");
var timeArray = [];
var newTime;
var inputs = $("input");


console.log(time);

// var timeAm = time.split(/AM|PM/);
// timeArray.push(timeAm);
// // var timepm = time.split("");
// console.log(timeArray);
// console.log(timeArray.length);

var newString = JSON.stringify(time);
console.log(newString);
var timeAm = newString.split(/AM|PM|"/);
console.log(timeAm);

for (i = 5; i < timeAm.length - 1; i ++) {
    timeAm[i] = Number(timeAm[i]) + 12;
}

var randTime = moment().set('hour', 14)
console.log(randTime);
// console.log(inputs);


console.log(timeAm);

// for (i = 0; i < timeAm.length ; i ++) {
//     newTime = moment().set('hour', timeAm[i]);
//     console.log(newTime);
//     if(newTime.isBefore()){
//         inputs[i].classList.add("past");
//     } else if (newTime.isAfter()) {
//         inputs[i].classList.add("future");
//     } else {
//         inputs[i].classList.add("present");
//     }
// }

for (i = 0; i < timeAm.length - 1; i ++) {
    newTime = moment().set('hour', timeAm[i]);
    console.log(newTime);
    if(newTime.isSame(randTime, "hour")){
        inputs[i].classList.add("present");
    } else if (newTime.isAfter(randTime)) {
        inputs[i].classList.add("future");
    } else {
        inputs[i].classList.add("past");
    }
}

// var newArray = timeArray.toString();
//     console.log(newArray);

newTime = moment().set('hour', time[0]);



console.log(newTime);




