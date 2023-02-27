function findMissingNumber(sequence) {
  if (!sequence) return 0;
  const numbers = sequence
    .split(' ')
    .map(Number)
    .filter((number) => !isNaN(number));
  if (numbers.length === 0 || numbers[0] !== 1) return 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== i + 1) {
      return i + 1;
    }
  }
  return 0;
}

console.log(findMissingNumber('1 2 3 5')); // 4
console.log(findMissingNumber('1 5')); // 2
console.log(findMissingNumber('2 1 4 3 a')); // 1
