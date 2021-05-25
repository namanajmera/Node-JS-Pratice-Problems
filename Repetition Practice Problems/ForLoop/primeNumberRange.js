// Extend the program to take a range of number as input and output the Prime
// Numbers in that range.

const prompt = require('prompt-sync')();

let start = prompt("Enter the start range:- ")
let end = prompt("Enter the end range:- ")

start = parseInt(start)
end = parseInt(end)

for (let i = start; i <= end; i++) {
    let flag = 0
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1
            break
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i)
    }
}
