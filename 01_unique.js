// Write a function that determines whether all characters in a string are unique. Case must be respected: 'a' and 'A' are different characters.

function isUnique(string) {
  // for (let i=0; i<string.length; i++) {
  //   let char = string[i]
  //   if (string.lastIndexOf(char) !== i) return false
  // }
  // return true

  // refactoring
  const strUnique = new Set (string)
  if (string.length !== strUnique.size) return false
  return true
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false