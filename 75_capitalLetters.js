// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
  const result = [];

  for (let letter of word) {
    if (letter !== letter.toLowerCase()) {
      result.push(word.indexOf(letter));
    }
  }
  return result;
};

console.log(capitals('CodEWaRs'), [0,3,4,6])