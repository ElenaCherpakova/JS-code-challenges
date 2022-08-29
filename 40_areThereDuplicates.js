/*Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern. */

// function areThereDuplicates(...inp) {
// let obj = {};
// for (let i = 0; i < inp.length; i++) {
//   if (obj[inp[i]]) {
//     return true;
//   } else {
//     obj[inp[i]] = 1;
//   }
// }
// return false;
// }

function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
      a = a.charCodeAt(0)
      b = b.charCodeAt(0)
    }
    return a - b
  })
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

// One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 