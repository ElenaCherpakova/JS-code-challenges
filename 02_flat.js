// Write a function that takes an array of nested arrays and unpack it into the resulting flat array. The result should be a new one-dimensional array.

function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const flat = flatten(array[i]);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
