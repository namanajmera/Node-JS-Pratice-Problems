const MAXIMUM_FREQUENCY = 10;
function getDiceNumber() {
   return (Math.floor(Math.random() * 10) % 6) + 1;
}
function initializeMap(map) {
   for (let index = 1; index <= 6; index++) {
      map.set(index, 0);
   }
}
function maximumFrequency(frequency) {
   return frequency >= MAXIMUM_FREQUENCY;
}

let diceNumberFrequencyMap = new Map();
initializeMap(diceNumberFrequencyMap);
while (!Array.from(diceNumberFrequencyMap.values()).find(maximumFrequency)) {
   diceNumber = getDiceNumber();
   frequency = diceNumberFrequencyMap.get(diceNumber);
   diceNumberFrequencyMap.set(diceNumber, (frequency + 1));
}
console.log(diceNumberFrequencyMap);

let mostFrequentDiceNumber = 0;
let minimumFrequency = 10;
let leastFrequentDiceNumber = 0;

diceNumberFrequencyMap.forEach((value, key) => {
   if (value < minimumFrequency) {
      minimumFrequency = value;
      leastFrequentDiceNumber = key;
   }
   if (value == 10) {
      mostFrequentDiceNumber = key;
   }
});

console.log("MOST FREQUENT NUMBER : " + mostFrequentDiceNumber);
console.log("LEAST FREQUENT NUMBER : " + leastFrequentDiceNumber);