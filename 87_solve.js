//remove duplicates and have this output [4,6,3]

function removeDup(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }
  return result;
}

function solve(arr) {
  let result = [];
  let seen = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    let element = arr[i];
    if (!seen.hasOwnProperty(element)) {
      result.unshift(element);
      seen[element] = true;
    }
  }
  return result;
}

console.log(solve([3, 4, 4, 3, 6, 3]));
