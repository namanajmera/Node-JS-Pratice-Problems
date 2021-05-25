// Take a number from user and check if the number is a Prime then show
// that its palindrome is also prime
// a. Write function check if number is Prime
// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime

const prompt = require("prompt-sync")();
let input = prompt("Enter the number:- ");
input = parseInt(input)

function getPalindrome(value) {
    let palindrome = 0;
    while (value >= 1) {
        palindrome = parseInt(palindrome * 10 + (value % 10));
        value = parseInt(value / 10);
    }
    return palindrome;
}

function isPrime(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) count++;
    }
    if (count == 2) {
        return true;
    } else {
        return false;
    }
}

if (isPrime(input)) {
    console.log("The number is PRIME");
    if (isPrime(getPalindrome(input))) {
        console.log("Its Palindrome is also PRIME");
    } else {
        console.log("Its Palindrome is not PRIME");
    }
}
else {
    console.log("The number is not PRIME");
}