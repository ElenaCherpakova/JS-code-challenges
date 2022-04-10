// Write a function that takes a 3x3 matrix and flips it 90 degrees clockwise.
// Optional: Write 2 more functions that flip the matrix by 180 and 270 degrees.

// [1, 2, 3]    [7, 4, 1]
// [4, 5, 6] -> [8, 5, 2]  
// [7, 8, 9]    [9, 6, 3]   


/*
0:0 0:1 0:2    0:2 1:2 2:2 
1:0 1:1 1:2 -> 0:1 1:1 2:1
2:0 2:1 2:2    0:0 1:0 2:0

*/
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotate(source) {

}

console.log(rotate(matrix))