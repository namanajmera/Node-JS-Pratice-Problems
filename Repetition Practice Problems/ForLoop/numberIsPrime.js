// Write a program that takes a input and determines if the number is a prime.

const prompt = require('prompt-sync')();

let n = prompt("Enter the value:- ")

let isPrime = true

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        isPrime = false
    }
}
if (isPrime)
    console.log(n + " is prime.")
else
    console.log(n + " is not a prime.")