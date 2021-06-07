let repeatedDigitArray = new Array();

for (let i = 0; i <= 100; i++) {
   let tensDigit = Math.floor(i / 10);
   let unitDigit = Math.floor(i % 10);
   if (unitDigit == tensDigit && i != 0) {
      repeatedDigitArray.push(i);
   }
}
console.log(repeatedDigitArray);