// Write a function that takes 2 strings. Return true if the strings are reversed versions of each other (see example). Otherwise return false.
function isStringRotated(source, test) {
  //check if the length of source and test are equal
  // if (source.length != test.length) {
  //   return false;
  // }
  // for (let i = 0; i < source.length; i++) {
  //   const rotate = source.slice(i, source.length) + source.slice(0, i);
  //   if (rotate === test) {
  //     return true;
  //   }
  // }
  // return false;

  //refactoring
  return (source + source).includes(test) && source.length === test.length;
}

console.log(isStringRotated("javascript", "scriptjava")); // -> true
console.log(isStringRotated("javascript", "iptjavascr")); // -> true
console.log(isStringRotated("javascript", "java")); // -> false
