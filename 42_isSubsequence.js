/*Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.*/

function isSubsequence(strOne, strTwo) {
  let i = 0;
  let j = 0;
  while (i < strOne.length && j < strTwo.length){
    if (strOne[i] === strTwo[j]){
      i++;
    }
    j++;
  }
  return i === strOne.length;
}

console.log(isSubsequence('hello world', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)