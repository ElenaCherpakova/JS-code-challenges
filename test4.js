const printReversedWordBySymbol = (word) => {
  let i = word.length - 1;
  while (i >= 0) {
    console.log(word[i]);
    i = i - 1;
  }
 
}
const name = 'Elena';
console.log(printReversedWordBySymbol(name));