// Write a function that takes an array of strings and returns the most frequently occurring string in that array. If there are several such lines, then you need to return the first one, going from left to right.
function highestFrequency(array) {
  const map = {};
  let max = 0;
  let highFrequency;
  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    if (map[char]) { //map[char] is a value in obj
      map[char]++;
    } else {
      map[char] = 1;
    }
    if (map[char] > max) {
      max = map[char];
      highFrequency = array[i];
    }
  }
  return highFrequency;
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi
