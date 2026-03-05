// Perfect Cube Count
// Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.

// The lower number is not garanteed to be the first argument.
// A number is a perfect cube if there exists an integer (n) where n * n * n = number. For example, 27 is a perfect cube because 3 * 3 * 3 = 27.

function countPerfectCubes(a, b){
    const low = Math.min(a, b)
    const high = Math.max(a, b)
    return Math.floor(Math.cbrt(high)) - Math.ceil(Math.cbrt(low)) + 1
}

console.log(countPerfectCubes(3, 30)) // 2.
console.log(countPerfectCubes(1, 30)) // 3.
console.log(countPerfectCubes(30, 0)) // 4.
console.log(countPerfectCubes(-64, 64)) // 9.
console.log(countPerfectCubes(9214, -8127)) // 41.