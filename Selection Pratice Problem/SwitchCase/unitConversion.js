// Write a program that takes User Inputs and does Unit Conversion of
// different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet
const prompt = require('prompt-sync')();

const FEET_TO_INCHES_CONVERSION_UNIT = 12;
const INCHES_TO_FEET_CONVERSION_UNIT = 1 / FEET_TO_INCHES_CONVERSION_UNIT;
const METER_TO_FEET_CONVERSION_UNIT = 3.2808;
const FEET_TO_METER_CONVERSION_UNIT = 1 / METER_TO_FEET_CONVERSION_UNIT;

let operation = true;

while (operation) {
    console.log("1. FEET_TO_INCH_CONVERSION")
    console.log("2. FEET_TO_METER_CONVERSION")
    console.log("3. INCH_TO_FEET_CONVERSION")
    console.log("4. METER_TO_FEET_CONVERSION")
    console.log("5. For Exit.")

    let choice = prompt("Enter the choice:- ")
    switch (choice) {
        case "1":
            var input = prompt("Enter the input:- ")
            console.log("1. " + input + " feet = " + (input * FEET_TO_INCHES_CONVERSION_UNIT) + " inches");
            break;
        case "2":
            var input = prompt("Enter the input:- ")
            console.log("2. " + input + " feet = " + (input * FEET_TO_METER_CONVERSION_UNIT).toFixed(2) + " meters");
            break;
        case "3":
            var input = prompt("Enter the input:- ")
            console.log("3. " + input + " inches = " + (input * INCHES_TO_FEET_CONVERSION_UNIT) + " feet");
            break;
        case "4":
            var input = prompt("Enter the input:- ")
            console.log("4. " + input + " meters = " + (input * METER_TO_FEET_CONVERSION_UNIT).toFixed(2) + " feet");
            break;
        case "5":
            operation = false;
            console.log("Exiting....!!!!1")
            break;
        default:
            console.log("You entered wrong choice.")
            break;

    }
}