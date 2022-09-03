/*Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.*/

function findLongestSubstring(str) {
  let set = new Set();
  let start = 0;
  let end = 0;
  let maxLgn = 0;
  while (end < str.length) {
    if (!set.has(str[end])) {
      set.add(str[end]);
      end++;
    } else {
      set.delete(str[start]);
      start++;
    }
    maxLgn = Math.max(maxLgn, set.size);
  }
  return maxLgn;
}

console.log(findLongestSubstring('pwwkew')) // 3
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6