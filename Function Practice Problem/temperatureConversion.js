//Help user find degF or degC based on their Conversion Selection. Use
// Case Statement and ensure that the inputs are within the Freezing Point (
//     0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
//     a. degF = (degC * 9/5) + 32
//     b. degC = (degF – 32) * 5/9


const prompt = require("prompt-sync")();
const FAHRENHEIT_TO_CELCIUS = "1";
const CELCIUS_TO_FAHRENHEIT = "2";

function toFahrenheit(degreeCelcius) {
    return (degreeCelcius * 9 / 5) + 32;
}

function toCelcius(degreeFahrenheit) {
    return (degreeFahrenheit - 32) * 5 / 9;
}

console.log("1. degF to degC\n2. degC to degF")
let choice = prompt("Enter the choice:- ")
switch (choice) {
    case FAHRENHEIT_TO_CELCIUS:
        let fahrenheit = prompt("Enter the fahrenheit value:- ")
        if (fahrenheit < 32 || fahrenheit > 212) {
            console.log("Invalid Input.")
            return
        }
        console.log(fahrenheit + " degF = " + toCelcius(fahrenheit).toFixed(2) + " degC");
        break
    case CELCIUS_TO_FAHRENHEIT:
        let celcius = prompt("Enter the celcius value:- ")
        if (celcius < 0 || celcius > 100) {
            console.log("Invalid Input.")
            return
        }
        console.log(celcius + " degC = " + toFahrenheit(celcius).toFixed(2) + " degF");
        break
    default:
        console.log("Invalid Choice.")
}