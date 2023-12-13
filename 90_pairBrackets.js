function pairBrackets(str) {
  const stack = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      let lastBracketInStack = stack.pop();
      if (pairs[lastBracketInStack] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(pairBrackets('{()}'));
console.log(pairBrackets('{(}'));

