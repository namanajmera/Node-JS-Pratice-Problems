// Write a program that takes a command-line argument n and prints a
// table of the powers of 2 that are less than or equal to 2^n till 256 is
// reached..

const prompt = require('prompt-sync')();

let n = prompt("Enter the value:- ")

let index = 1;
while (index <= n && Math.pow(2, index) <= 256) {
    console.log(Math.pow(2, index))
    index++;
}