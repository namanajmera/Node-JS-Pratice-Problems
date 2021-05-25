// Write a function to check if the two numbers are Palindromes

const prompt = require("prompt-sync")();

let number1 = prompt("Enter the 1st number: ")
let number2 = prompt("Enter the second number: ")


function isPalindrome(value1, value2) {
    let rev = 0, rem;
    while (value1 > 0) {
        rem = parseInt(value1 % 10);
        rev = parseInt(rev * 10 + rem);
        value1 = parseInt(value1 / 10);
    }
    if (rev == value2)
        return true
    else
        return false
}
var isdPalindromeNumber = isPalindrome(number1, number2)
if (isdPalindromeNumber)
    console.log("Two numbers are palindome.")
else
    console.log("Two numbers are not palindome.")