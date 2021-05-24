const IS_HEAD = 0
const IS_TAIL = 1

var coin = Math.floor(Math.random() * 10) % 2;

if (coin == IS_HEAD)
    console.log("Head.")
else
    console.log("Tail.")