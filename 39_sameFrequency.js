function sameFrequency(first, second) {
  let firstString = first.toString();
  let secondString = second.toString();
  if (firstString.length !== secondString.length) {
    return false;
  }
  let lookup = {};
  for (let i = 0; i < firstString.length; i++) {
    let num = firstString[i];
    lookup[num] ? lookup[num] += 1 : lookup[num] = 1;
  }
  for (let i = 0; i < secondString.length; i++) {
    let num = secondString[i];
    if (!lookup[num]) {
      return false;
    } else {
      lookup[num] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false