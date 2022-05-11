function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN
  } else {
    return fromN + sum(fromN+1, toN)
  }
}

module.exports = sum;

console.log(sum(3,3))
console.log(sum(3,5))