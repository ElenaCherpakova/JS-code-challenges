function wordStep(str) {
  const words = str.split(' ');
  const result = [];
  let row = 0,
    col = 0,
    maxCol = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (!result[row]) result[row] = [];

      // place horizontally
    if (i % 2 === 0) {
      for (let j = 0; j < word.length; j++) {
        result[row][col] = word[j];
        col++;
      }
      maxCol = Math.max(maxCol, col);
      col--;
    } else {
      // for vertical case
      for (let j = 1; j < word.length; j++) {
        row++;
        if (!result[row]) {
          result[row] = Array(maxCol).fill(' ');
        }
        result[row][col] = word[j];
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    while (result[i].length < maxCol) {
      result[i].push(' ');
    }
  }
  return result;
}

console.log(wordStep('HELLO OIL'), [
  ['H', 'E', 'L', 'L', 'O'],
  [' ', ' ', ' ', ' ', 'I'],
  [' ', ' ', ' ', ' ', 'L'],
]);
