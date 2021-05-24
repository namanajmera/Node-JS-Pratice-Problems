// Converting the inches into feet
const CONVERSION_FACTOR_OF_INCH_INTO_FEET = 1 / 12

let inches = 42
let feet = inches * CONVERSION_FACTOR_OF_INCH_INTO_FEET
console.log(inches + " in = " + feet + " ft.")

// Rectangular Plot of 60 feet x 40 feet in meters
const FEET_TO_METERS_CONVERSION_UNIT = 1 / 3.2808;

let lengthInFeet = 60
let breadthInFeet = 40
let lengthInMeters = lengthInFeet * FEET_TO_METERS_CONVERSION_UNIT
let breadthInMeters = breadthInFeet * FEET_TO_METERS_CONVERSION_UNIT
console.log("Plot Dimension in Feet:- " + lengthInFeet
    + " Feet X " + breadthInFeet + " Feet" + " Into Meters: " + "Plot Dimension in Meters:- " + lengthInMeters.toFixed(2)
    + " meters X " + breadthInMeters.toFixed(2) + " meters")
