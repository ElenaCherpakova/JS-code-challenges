// Write a function that takes a string and returns a new one with all duplicate characters removed.

function removeDupes(str) {
  // const result = [];
  // const map = {};
  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i];
  //   if (!map[char]) {
  //     map[char] = true;
  //     result.push(char);
  //   }

  // }
  // return result.join("");

  // refactoring
  return Array.from(new Set(str)).join('')
}

console.log(removeDupes("abcd")); // -> 'abcd'
console.log(removeDupes("aabbccdd")); // -> 'abcd'
console.log(removeDupes("abcddbca")); // -> 'abcd'
console.log(removeDupes("abababcdcdcd")); // -> 'abcd'
