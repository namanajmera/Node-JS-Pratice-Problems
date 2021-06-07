const prompt = require("prompt-sync")();
let firstNumber = parseInt(prompt("Enter first number : "));
let secondNumber = parseInt(prompt("Enter second number : "));
let thirdNumber = 0 - (firstNumber + secondNumber);

let numberArray = new Array();
numberArray.push(firstNumber);
numberArray.push(secondNumber);
numberArray.push(thirdNumber);
console.log("Array : [ " + numberArray + " ]");

function getTotal(sum, number) {
   return sum + number;
}

console.log("SUM of Elements of Array are : " + numberArray.reduce(getTotal, 0));