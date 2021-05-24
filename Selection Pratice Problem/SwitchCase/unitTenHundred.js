// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…

const prompt = require('prompt-sync')();

let value = prompt("Enter the number:- ")

switch (value) {
    case "1":
        console.log("Unit digit")
        break;
    case "10":
        console.log("Ten Digit.")
        break;
    case "100":
        console.log("Hundred Digit.")
        break;
    case "1000":
        console.log("Thousand Digit.")
        break;
    default:
        console.log("Enter the correct digit.")
}