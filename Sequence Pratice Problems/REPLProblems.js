//Random Function Math.floor(Math.random() * 10); to get Single Digit.

let digit = Math.floor(Math.random() * 10);
console.log("Single Digit Value is:- " + digit)

// Use Random to get Dice Number between 1 to 6
let dice = Math.floor(Math.random() * 10) % 6 + 1
console.log("Random dice value is:- " + dice)

// Add two Random Dice Number and Print the Result
let dice1 = Math.floor(Math.random() * 10) % 6 + 1
let dice2 = Math.floor(Math.random() * 10) % 6 + 1
console.log("Addition of two random dice is:- " + (dice1 + dice2))