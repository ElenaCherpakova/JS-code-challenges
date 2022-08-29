function countUniqueValues(array) {
  let i = 0;
  let j = 1;
  while (j < array.length) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
    j++;
  }
  return i + 1;
}

console.log(countUniqueValues([-2, -1, -1, 1, 3, 5])) // 5