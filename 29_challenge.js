const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(arr) {
  let tip = prompt("how much tips do you want to leave?");
  for (let i = 0; i < arr.length; i++) {
    let userTip = tip / 100;
    let userTotalSum = arr[i] + arr[i] * userTip;
    tips.push(userTip);
    totals.push(userTotalSum);
  }
  return totals;
}
console.log(calcTip(arr));
// console.log(tips);

function calcAverage(arr) {
  let totalSum = arr.reduce((acc, el) => acc + el, 0);
  return totalSum / arr.length;
}

// function calcAverage(arr1) {
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//     totalAverage = sum / arr1.length;
//   }
//   return totalAverage;
// }
console.log(calcAverage(arr));
