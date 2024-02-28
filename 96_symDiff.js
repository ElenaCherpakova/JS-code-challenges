// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

function difference(setA, setB) {
  let diff = new Set(setA);
  for (let el of setB) {
    if (diff.has(el)) {
      diff.delete(el);
    } else {
      diff.add(el);
    }
  }
  return diff;
}

function sym(...args) {
  let result = new Set(args[0]);
  for (let i = 1; i < args.length; i++) {
    result = difference(result, new Set(args[i]));
  }
  return Array.from(result);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
