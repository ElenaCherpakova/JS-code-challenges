function miniMaxSum(array) {
  let min = array[0];
  let max = array[0];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (min > array[i]) {
      min = array[i];
    }
    if (max < array[i]) {
      max = array[i];
    }
  }
  console.log(sum - max, sum - min);
}

miniMaxSum([1, 3, 5, 7, 9]);
