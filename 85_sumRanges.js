function summaryRanges(nums) {
  let uniqueNum = [...new Set(nums)];
  let start = null;
  let result = [];

  for (let i = 0; i < uniqueNum.length; i++) {
    if (start === null) {
      start = uniqueNum[i];
    }
    if (uniqueNum[i] === uniqueNum[i + 1] - 1) {
      continue;
    }
    if (uniqueNum[i] === start) {
      result.push(uniqueNum[i].toString());
      start = null;
    } else {
      result.push(`${start}->${uniqueNum[i]}`);
      start = null;
    }
  }
  return result;
}

console.log(summaryRanges([]), []);
console.log(summaryRanges([1, 1, 1, 1]), ['1']);
console.log(summaryRanges([1, 2, 3, 4]), ['1->4']);
console.log(summaryRanges([0, 1, 2, 5, 6, 9]), ['0->2', '5->6', '9']);
console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]), ['0->7']);
