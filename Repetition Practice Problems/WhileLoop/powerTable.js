const prompt = require('prompt-sync')();

let n = prompt("Enter the value:- ")

let index = 1;
while (index <= n && Math.pow(2, index) <= 256) {
    console.log(Math.pow(2, index))
    index++;
}