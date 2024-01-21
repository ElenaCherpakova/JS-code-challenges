/*Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.*/

function isSubsequence(s, t) {
  let i = 0;
  let j = 0;
  //edge case
  if(s.length > t.length) return false
  while (i < s.length && j < t.length){
    if (s[i] === t[j]){
      i++;
    }
    j++;
  }
  return i === s.length;
}
// time complexity - O(n)
// space complexity O(1)
console.log(isSubsequence('hello world js', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)