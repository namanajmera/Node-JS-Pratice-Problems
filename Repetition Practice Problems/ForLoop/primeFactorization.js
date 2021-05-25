// Write a program to compute Factors of a number N using prime factorization method.
// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.

const prompt = require('prompt-sync')();

let n = prompt("Enter the value:- ")
for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false
            }
        }
        if (isPrime)
            console.log(i)
    }
}