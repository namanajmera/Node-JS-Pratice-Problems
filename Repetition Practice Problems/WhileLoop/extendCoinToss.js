// Extend the Flip Coin problem till either Heads or Tails wins 11 times.

const IS_HEAD = 0
const IS_TAIL = 1

let head = 0;
let tail = 0;
while (head != 11 && tail != 11) {
    var coin = Math.floor(Math.random() * 10) % 2;

    if (coin == IS_HEAD)
        head++;
    else
        tail++;
}
if (head == 11)
    console.log("Head got:- " + head + " So Head wins.")
else
    console.log("Tail got:- " + tail + " So Tail wins.")
