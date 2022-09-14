function findPairIndex(arr, sum) {
  let cache = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let pairIndex = cache[num];
    if (pairIndex !== undefined) {
      return [pairIndex, i];
    }
    cache[sum - num] = i;
  }
  return [];
}

console.log(findPairIndex([4, 9, 7, 3, 5], 8));
// cache { 4: 0, 3: 1, -1: 2, 5: 3 }
