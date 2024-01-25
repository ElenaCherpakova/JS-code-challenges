var twoSum = function (numbers, target) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;
  while (leftPointer < rightPointer) {
    let sum = numbers[leftPointer] + numbers[rightPointer];
    if (sum === target) {
      return [leftPointer + 1, rightPointer + 1];
    } else if (sum < target) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return false;
};
console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
