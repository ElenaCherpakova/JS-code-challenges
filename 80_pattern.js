function pattern(n) {
  let output = '';
  // creating the rows of the pattern
  for (let i = 1; i <= n; i++) {
    //creating the columns of the pattern and adding quantity of i to the output
    for (let j = 0; j < i; j++) {
      output += i;
    }
    // adding a new line after each row
    output += '\n';
  }
  return output.trim();
}

console.log(pattern(3));
console.log("=======")
console.log(pattern(2));
console.log("=======")
console.log(pattern(5));
