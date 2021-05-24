const prompt = require('prompt-sync')();

var value = prompt("Enter the number:- ")

if (value == 1)
    console.log("Unit digit")
else if (value == 10)
    console.log("Ten Digit.")
else if (value == 100)
    console.log("Hundred Digit.")
else if (value == 1000)
    console.log("Thousand Digit.")
else
    console.log("Enter the correct digit.")