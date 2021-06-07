// Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

function getRandom3DigitNumber() {
  return Math.floor(Math.random() * 900) + 100;
}
let randomElementArray = new Array();

//WITHOUT ARRAYS SORT
console.log("WITHOUT SORTING ARRAY");
let largestElement = 0;
let smallestElement = 999;
for (let i = 0; i < 10; i++) {
  let element = getRandom3DigitNumber();
  if (element > largestElement) largestElement = element;
  if (element < smallestElement) smallestElement = element;
  randomElementArray.push(element);
}

console.log("Array : ");
console.log(randomElementArray);
console.log("Largest Element: " + largestElement + "  Smallest Element: " + smallestElement);
let secondLargestElement = smallestElement;
let secondSmallestElement = largestElement;
randomElementArray.forEach(element => {
  if (element > secondLargestElement && element < largestElement) {
    secondLargestElement = element;
  }
  if (element < secondSmallestElement && element > smallestElement) {
    secondSmallestElement = element;
  }
});
console.log("Second Largest Element: " + secondLargestElement + "  Second Smallest Element: " + secondSmallestElement);
//WITH ARRAYS SORT
console.log("\nAFTER SORTING ARRAY");
randomElementArray.sort();
console.log("Array : ");
console.log(randomElementArray);
console.log("Largest Element: " +
  randomElementArray[randomElementArray.length - 1] +
  "  Smallest Element: " + randomElementArray[0]);
console.log("Second Largest Element: " +
  randomElementArray[randomElementArray.length - 2] +
  "  Second Smallest Element: " + randomElementArray[1]);