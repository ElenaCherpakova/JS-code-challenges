// Flattened
// Given an array, determine if it is flat.
// An array is flat if none of its elements are arrays.

function isFlat(arr) {
    return arr.every(el => !Array.isArray(el));
}
console.log(isFlat([1, 2, 3, 4])); // true.
console.log(isFlat([1, [2, 3], 4])); // false.
console.log(isFlat([1, 0, false, true, "a", "b"])); // true.
console.log(isFlat(["a", [0], "b", true])); // false.
console.log(isFlat([1, [2, [3, [4, [5]]]], 6])); // false.