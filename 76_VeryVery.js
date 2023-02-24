function iam(input) {
  let str = 'I am';
  function innerFunc(innerInput) {
    if (innerInput) {
      str += ' very';
      return `${str} ${innerInput}`;
    } else {
      str += ' very';
      return innerFunc;
    }
  }
  if (input) {
    return `${str} ${input}`;
  } else {
    return innerFunc;
  }
}

console.log(iam('happy')); // returns the string "I am happy"
console.log(iam()('scared')); // returns the string "I am very scared"
console.log(iam()()('interested')); // returns the string "I am very very interested"
console.log(iam()()()('interested')); // returns the string "I am very very interested"
