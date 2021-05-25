// Write a program that computes a factorial of a number taken as input.
// 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

const prompt = require('prompt-sync')();

let number = prompt("Enter the number to find the factorial:- ")
let fact = 1;
if (number == 0 || number == 1) {
    console.log("Factorial of " + number + " is:- " + 1)
} else {
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log("Factorial of " + number + " is:- " + fact)
}
