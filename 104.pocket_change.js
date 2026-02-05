// Pocket Change
// Given an array of integers representing the coins in your pocket, 
// with each integer being the value of a coin in cents, 
// return the total amount in the format "$D.CC".

// 100 cents equals 1 dollar.
// In the return value, include a leading zero for amounts 
// less than one dollar and always exactly two digits for the cents.
function countChange(change) {
    const CENTS_TO_DOLLAR = 100;
    const res = change.reduce((total, acc) => total + acc / CENTS_TO_DOLLAR
        , 0).toFixed(2);
    return `$${res}`;
}
console.log(countChange([25, 25, 25, 25])) // "$1.00"
console.log(countChange([1])) // "$0.01"
console.log(countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25])) // "$1.43"