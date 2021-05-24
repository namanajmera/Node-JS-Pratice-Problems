// Write a program that reads 5 Random 2 Digit values , then find their sum and the average
let size = 5;
let sumOfDigits = 0
for (let index = 0; index < 5; index++) {
    sumOfDigits += Math.floor(Math.random() * 90 + 10)
}
let average = sumOfDigits / size
console.log("Sum of Random 5 value of 2 digits number is:- " + sumOfDigits)
console.log("Average of Random 5 value of 2 digits number is:- " + average)