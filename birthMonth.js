const NUMBER_OF_INDIVIDUALS = 50;
let countOfPeople = 0;

let birthMonthArray = ["January", "February", "March", "April", "May", "June", "July",
   "August", "September", "October", "November", "December"];

let nameToBirthMonthMap = new Map();
while (countOfPeople < NUMBER_OF_INDIVIDUALS) {
   countOfPeople++;
   let name = "Person" + countOfPeople;
   let month = Math.floor(Math.random() * 100) % 12;
   nameToBirthMonthMap.set(name, birthMonthArray[month]);
}
console.log(nameToBirthMonthMap);

birthMonthArray.forEach(birthMonth => {
   console.log("\nPeople in the Month : " + birthMonth);
   for (let [person, month] of nameToBirthMonthMap) {
      if (month == birthMonth) console.log(person);
   }
});