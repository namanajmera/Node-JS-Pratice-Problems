//  Write a program that takes day and month from the command line and prints true if
// day of month is between March 20 and June 20, false otherwise.
const prompt = require('prompt-sync')();

var day = prompt("Enter the day:- ")
var month = prompt("Enter the month:- ")
var startDate = new Date("March 20, 2020")
var endDate = new Date("June 20, 2020")

var inputDate = new Date(month + " " + day + ", 2020");
if (inputDate > startDate && inputDate < endDate)
    console.log(true)
else
    console.log(false)
