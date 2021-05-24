// Write a program that takes a command-line argument n and prints a table of the
// powers of 2 that are less than or equal to 2^n.

const prompt = require('prompt-sync')();

let n = prompt("Enter the value:- ")
let powerOfN = Math.pow(2, n)
console.log(powerOfN)

for (let i = 0; i <= n; i++) {
    console.log(Math.pow(2, i))
}
