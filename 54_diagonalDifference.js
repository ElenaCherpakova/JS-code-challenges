/*Given a square matrix, calculate the absolute difference between the sums of its diagonals.*/

function diagonalDifference(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][n - i - 1];
  }
  return Math.abs(leftSum - rightSum);
}
console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ]),
); // 2
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]),
); // 15
