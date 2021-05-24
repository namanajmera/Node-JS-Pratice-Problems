// Read a single digit number and write the number in word

const prompt = require('prompt-sync')();

var value = prompt("Enter the single digit number:- ")

if (value == 0)
    console.log("Zero")
else if (value == 1)
    console.log("One")
else if (value == 2)
    console.log("two")
else if (value == 3)
    console.log("Three")
else if (value == 4)
    console.log("Four")
else if (value == 5)
    console.log("Five")
else if (value == 6)
    console.log("Six")
else if (value == 7)
    console.log("Seven")
else if (value == 8)
    console.log("Eight")
else if (value == 9)
    console.log("Nine")
else
    console.log("Please enter the valid single digit number.")
