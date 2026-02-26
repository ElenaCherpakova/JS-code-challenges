// Sequential Difference
// Given an array of numbers, return a new array containing the value needed to get from each number to the next number.

// For the last number, use 0 since there is no next number.
// For example, given [1, 2, 4, 7], return [1, 2, 3, 0].

function findDifferences(arr) {
    const difference = arr.slice(1).map((num, i) => num - arr[i]);
    return [...difference, 0];
}

findDifferences([1, 2, 4, 7]); // [1, 2, 3, 0].
findDifferences([10, 15, 19, 22, 24, 25]); // [5, 4, 3, 2, 1, 0].
findDifferences([25, 20, 16, 13, 11, 10]); // [-5, -4, -3, -2, -1, 0].findDifferences([0, 1, 2, 2, 3, 3, 4, 5]) // [ 1, 1, 0, 1, 0, 1, 1, 0 ].
findDifferences([1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1]); // [1, 3, 7, 22, -49, 14, 42, 72, -335, 123, 59, 50, -28, 12, 4, 1, 0].