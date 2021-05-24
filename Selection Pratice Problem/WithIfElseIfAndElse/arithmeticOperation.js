// Enter 3 Numbers do following arithmetic operation and find the one that
// is maximum and minimum
// 1. a + b * c     3. c + a / b
// 2. a % b + c     4. a * b + c

const prompt = require('prompt-sync')();

var a = prompt("Enter the 1st number:- ")
var b = prompt("Enter the 2nd number:- ")
var c = prompt("Enter the 3rd number:- ")

var operation1 = a + b * c
console.log("1. a + b * c =" + operation1)
var operation2 = a % b + c
console.log("2. a % b + c =" + operation2)
var operation3 = c + a / b
console.log("3. c + a / b =" + operation3)
var operation4 = a * b + c
console.log("4. a * b + c =" + operation4)

// Maximum Operation
if (operation1 > operation2 && operation1 > operation3 && operation1 > operation4)
    console.log("Maximum operation is 1. a + b * c = " + operation1)
else if (operation2 > operation1 && operation2 > operation3 && operation2 > operation4)
    console.log("Maximum operation is 2. a % b + c =" + operation2)
else if (operation3 > operation1 && operation3 > operation2 && operation3 > operation4)
    console.log("Maximum operation is 3. c + a / b =" + operation3)
else
    console.log("Maximum operation is 4. a * b + c =" + operation4)

// Minimum Operation
if (operation1 < operation2 && operation1 < operation3 && operation1 < operation4)
    console.log("Minimum operation is 1. a + b * c = " + operation1)
else if (operation2 < operation1 && operation2 < operation3 && operation2 < operation4)
    console.log("Minimum operation is 2. a % b + c =" + operation2)
else if (operation3 < operation1 && operation3 < operation2 && operation3 < operation4)
    console.log("Minimum operation is 3. c + a / b =" + operation3)
else
    console.log("Minimum operation is 4. a * b + c =" + operation4)