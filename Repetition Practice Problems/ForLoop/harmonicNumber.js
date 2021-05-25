// Write a program that takes a command-line argument n and prints the nth harmonic
// number. Harmonic Number is of the form

const prompt = require('prompt-sync')();

let n = prompt("Enter the value:- ")

let harmonic = 0;

for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}
console.log(n + "th Harmonic : " + harmonic);