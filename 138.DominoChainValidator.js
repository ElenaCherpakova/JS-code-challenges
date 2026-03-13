function isValidDominoChain(dominoes) {

    for (let i = 0; i < dominoes.length - 1; i++) {
        const currentDominoe = dominoes[i][1];
        const nextDominoe = dominoes[i + 1][0];
        if (currentDominoe !== nextDominoe) return false;
    } return true;
} 

console.log(isValidDominoChain([[1, 3], [3, 6], [6, 5]])) // true.
console.log(isValidDominoChain([[6, 2], [3, 4], [4, 1]])) // false.
console.log(isValidDominoChain([[2, 5], [5, 6], [5, 1]])) // false.
console.log(isValidDominoChain([[4, 3], [3, 1], [1, 6], [6, 6], [6, 5], [5, 1], [1, 1], [1, 4], [4, 4], [4, 2]])) // true.
console.log(isValidDominoChain([[2, 3], [3, 3], [3, 6], [6, 1], [1, 4], [3, 5], [5, 5], [5, 4], [4, 2], [2, 2]])) // false.