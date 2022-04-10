// Write a function that will check the string for balanced brackets: {}, (), []. Return true if they are balanced, false otherwise.

function isBalanced(string) {
  const start = "{[(";
  const end = "}])";

  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const queue = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (start.includes(char)) {
      queue.push(char);
    } else if (end.includes(char)) {
      const last = queue.pop();
      //where last is open bracket

      if (map[char] !== last) {
        //map[char] is a key of closed bracket
        return false;
      }
    }
  }
  return !queue.length;
}

console.log(isBalanced("(x + y) - (4)")); // -> true
console.log(isBalanced("(((10 ) ()) ((?)(:)))")); // -> true
console.log(isBalanced("[{()}]")); // -> true
console.log(isBalanced("(50)(")); // -> false
console.log(isBalanced("[{]}")); // -> false
