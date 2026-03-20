// Inverted Matrix
// Given a matrix (an array of arrays) filled with two distinct values, return a new matrix where all occurrences of one value are swapped with the other.

// For example, given:

// [
//   ["a", "b"],
//   ["a", "a"]
// ]
// Return:

// [
//   ["b", "a"],
//   ["b", "b"]
// ]


function invertMatrix(matrix) {
    let value = matrix.flat();
    let [first, second] = new Set([...value]);
    value = value.map(x => x === first ? second : first);

    let res = [];
    let cols = matrix[0].length;
    for (let i = 0; i < value.length; i += cols) {
        res.push(value.slice(i, i + cols));
    }
    return res
}



console.log(invertMatrix([["a", "b"], ["a", "a"]])); // [["b", "a"], ["b", "b"]].
console.log(invertMatrix([[1, 0, 1], [1, 1, 1], [0, 1, 0]])); // [[0, 1, 0], [0, 0, 0], [1, 0, 1]].
console.log(invertMatrix([["apple", "banana", "banana", "apple"], ["banana", "apple", "apple", "banana"], ["banana", "banana", "banana", "apple"]])); // [["banana", "apple", "apple", "banana"], ["apple", "banana", "banana", "apple"], ["apple", "apple", "apple", "banana"]].
console.log(invertMatrix([[6, 7, 7, 7, 6], [7, 6, 7, 6, 7], [7, 7, 6, 7, 7], [7, 6, 7, 6, 7], [6, 7, 7, 7, 6]])); // [[7, 6, 6, 6, 7], [6, 7, 6, 7, 6], [6, 6, 7, 6, 6], [6, 7, 6, 7, 6], [7, 6, 6, 6, 7]].
console.log(invertMatrix([[1.2, 2.1, 2.1, 2.1], [2.1, 1.2, 2.1, 1.2], [1.2, 1.2, 2.1, 2.1]])); // [[2.1, 1.2, 1.2, 1.2], [1.2, 2.1, 1.2, 2.1], [2.1, 2.1, 1.2, 1.2]].