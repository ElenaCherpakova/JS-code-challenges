function makeNegative(num) {
  if (num < 0) return num;
  return -Math.abs(num)
}

console.log(makeNegative(42))
console.log(makeNegative(-2))