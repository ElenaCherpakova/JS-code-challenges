// Write a program that will output the length of the Collatz Conjecture for any given n.
function collatz(n) {
  let count = 0; // number of steps it takes to reach 1
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    count++;
  }
  return count;
}

console.log(collatz(20)); // 8
console.log(collatz(15)); // 18
