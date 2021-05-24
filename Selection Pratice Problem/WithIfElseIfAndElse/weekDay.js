// Read a Number and Display the week day (Sunday, Monday,…)

const prompt = require('prompt-sync')();

var value = prompt("Enter the number 1-7 to print the week day:- ")

if (value == 1)
    console.log("Sunday")
else if (value == 2)
    console.log("Monday")
else if (value == 3)
    console.log("Tuesday")
else if (value == 4)
    console.log("Wednesday")
else if (value == 5)
    console.log("Thursday")
else if (value == 6)
    console.log("Friday")
else if (value == 7)
    console.log("Saturday")
else
    console.log("Enter the wright number.")