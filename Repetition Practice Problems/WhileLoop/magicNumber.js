// Find the Magic Number
// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..

const prompt = require('prompt-sync')();

let min = 0
let max = 100
let mid = (min + max) / 2
let userCheck = ""
console.log("Think the number between 1 to 100.")
while (min < max) {
    userCheck = prompt("Is " + mid + " is your number?(y/n)")
    if (userCheck == "y") {
        console.log("Your number is:- " + mid)
        return
    }
    userCheck = prompt("Is your number is lesser than " + mid + " (y/n)")
    if (userCheck == "y") {
        max = mid
    } else {
        min = mid
    }
    if (userCheck != "y") {
        userCheck = prompt("Is your number is greater than " + mid + " (y/n)")
        if (userCheck == "y") {
            min = mid
        } else {
            max = mid
        }
    }
    mid = Math.floor((max + min) / 2)
}