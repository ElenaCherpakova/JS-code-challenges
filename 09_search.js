// Write a function that takes a sorted array of numbers and a number. It is necessary to return the index of the number, if it is in the array. Otherwise return -1.

function search(array, target) {
  for (index of array) {
    if (array[index] === target) return index;
  }
  return -1;
}

console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
console.log(search([1, 3, 6, 13, 17], 12)); // -> -1
console.log(search([1, 3, 6, 13, 17], 3)); // -> 1
