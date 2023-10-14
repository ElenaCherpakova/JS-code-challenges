function compoundArray(a, b) {
  //using splice
  let i = 1;
  while (b.length) {
    a.splice(i, 0, b.shift());
    i += 2;
  }
  return a;
}

console.log(compoundArray([11, 12], [21, 22, 23, 24]));
