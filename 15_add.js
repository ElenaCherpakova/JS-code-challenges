// Write a function that adds 2 numbers.
function add(a, b) {
  if (typeof a === "undefined") {
    return add;
  }
  if (typeof b === "undefined") {
    return function sum(c) {
      if (typeof c === "undefined") {
        return sum;
      }
      return a + c;
    };
  }
  return a + b;
}

console.log(add(20, 22)); // -> 42
console.log(add(20)(22)); // -> 42
console.log(add(20)()(22)); // -> 42
console.log(add(20)()()()(22)); // -> 42
console.log(add(20)()()()()()()()()()()()(22)); // -> 42
console.log(add()(20)(22)); // -> 42
console.log(add()()()()(20)(22)); // -> 42
console.log(add()(20)()(22)); // -> 42
console.log(add()()()()()(20)()()()(22)); // -> 42
