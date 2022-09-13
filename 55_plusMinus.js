// function plusMinus(arr) {
//   let n = arr.length;
//   let positive = 0;
//   let negative = 0;
//   let zero = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] > 0) {
//       positive++;
//     } else if (arr[i] < 0) {
//       negative++;
//     } else {
//       zero++;
//     }
//   }
//   console.log((positive / n).toFixed(6));
//   console.log((negative / n).toFixed(6));
//   console.log((zero / n).toFixed(6));
// }

// let arr = [-4, 3, -9, 0, 4, 1];
// console.log(plusMinus(arr));


function plusMinus(arr) {
  const totals = {
    positives: 0,
    negatives: 0,
    zeros: 0,
    ratio: (total) => (total / arr.length).toFixed(6)
  }

  arr.forEach((value) => {
    if (value > 0) {
      totals.positives++;
    } else if (value == 0) {
      totals.zeros++;
    } else {
      totals.negatives++;
    }
  })
}
console.log(totals.ratio(totals.positives));
console.log(totals.ratio(totals.negatives));
console.log(totals.ratio(totals.zeros));