// Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let size = 5
let min = Number.MAX_VALUE
let max = Number.MIN_VALUE
let randomNumber = 0
for (let index = 0; index < size; index++) {
    randomNumber = Math.floor(Math.random() * 900 + 100)
    if (randomNumber > max)
        max = randomNumber
    if (randomNumber < min)
        min = randomNumber
}
console.log("Minimum number is:- " + min);
console.log("Maximum number is:- " + max);
