// Write a Program where a gambler starts with Rs 100 and places Re 1 bet
// until he/she goes broke i.e. no more money to gamble or reaches the
// goal of Rs 200. Keeps track of number of times won and number of bets
// made.

const WINS = 0
const LOSES = 1;

let pocket = 100;
let bid = 1;
let numberOfBidsWon = 0;
let numberOfBets = 0;
while (pocket > 0 && pocket < 200) {
    let gamble = Math.floor(Math.random() * 10) % 2;
    if (gamble == WINS) {
        numberOfBidsWon++;
        pocket += bid;
    }
    if (gamble == LOSES) {
        pocket -= bid;
    }
    numberOfBets++;
}
console.log("Total Bets Made : " + numberOfBets);
if (pocket == 0) {
    console.log("Gambler Loses");
}
if (pocket == 200) {
    console.log("Gambler Wins");
    console.log("Number of Bids Won : " + numberOfBidsWon);
}