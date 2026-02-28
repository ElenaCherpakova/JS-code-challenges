// Matrix Shift
// Given a matrix (array of arrays) of numbers and an integer, shift all values in the matrix by the given amount.

// A positive shift moves values to the right.
// A negative shift moves values to the left.
// Values should wrap:

// Treat the matrix as one continuous sequence of values.
// When a value moves past the end of a row, it continues at the beginning of the next row.
// When a value moves past the last position in the matrix, it wraps to the first position.
// The same applies in reverse when shifting left.
// For example, given:

// [
//   [1, 2, 3],
//   [4, 5, 6]
// ]
// with a shift of 1, move all the numbers to the right one:

// [
//   [6, 1, 2],
//   [3, 4, 5]
// ]

function shiftMatrix(matrix, shift) {
    const flat = matrix.flat();
    const n = flat.length;
    // Handle shifts larger that the legnth of the matrix and negative shifts 
    const move = ((shift % n) + n) % n;

    const rotated = [
        ...flat.slice(n - move),
        ...flat.slice(0, n - move)

    ];

    const cols = matrix[0].length;
    let res = [];
    for (let i = 0; i < rotated.length; i += cols) {
        res.push(rotated.slice(i, i + cols));
    }


    return res;
}

console.log(shiftMatrix([[1, 2, 3], [4, 5, 6]], 1)); // [[6, 1, 2], [3, 4, 5]].
console.log(shiftMatrix([[1, 2, 3], [4, 5, 6]], -1)); // [[2, 3, 4], [5, 6, 1]].
console.log(shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)); // [[5, 6, 7], [8, 9, 1], [2, 3, 4]].
console.log(shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], -6)); // [[7, 8, 9], [1, 2, 3], [4, 5, 6]].
console.log(shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 7)); // [[10, 11, 12, 13], [14, 15, 16, 1], [2, 3, 4, 5], [6, 7, 8, 9]].
console.log(shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], -54)); // [[7, 8, 9, 10], [11, 12, 13, 14], [15, 16, 1, 2], [3, 4, 5, 6]].