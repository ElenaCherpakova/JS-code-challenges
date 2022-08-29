function countUniqueValues(array) {
  let i = 0;
  let j = 1;
  if(array.length === 0) return 0;
  while (j < array.length) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
    j++;
  }
  return i + 1;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([1])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4