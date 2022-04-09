// Write a function that determines whether all characters in a string are unique. Case must be respected: 'a' and 'A' are different characters.

function isUnique(string) {
  // for (let i=0; i<string.length; i++) {
  //   let char = string[i]
  //   if (string.lastIndexOf(char) !== i) return false
  // }
  // return true

  // refactoring

  return new Set(string).size === string.length
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadefg')) // -> false