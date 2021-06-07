const args = process.argv.slice(2);
let input = parseInt(args[0]);

function isPrime(number) {
   let count = 0;
   for (let i = 1; i <= number; i++) {
      if (number % i == 0) count++;
   }
   if (count == 2) {
      return true;
   } else {
      return false;
   }
}

let number = input;
if (number == 1) {
   console.log("The number " + number + " has no Prime Factors.");
   return;
}
let primeFactorArray = new Array();
for (let i = 2; i <= number; i++) {
   while (number % i == 0) {
      if (isPrime(i)) {
         primeFactorArray.push(i);
         number /= i;
      }
   }
}
console.log("Prime Factors of " + input + " : " + primeFactorArray.join(" X "));