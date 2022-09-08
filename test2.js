const countWords = function (words1, words2) {

  const wordCount = {};
  let count = 0;

  for (let word of words1) {

    if (!wordCount[word]) {
      wordCount[word] = 1;
    } else {
      wordCount[word]++;
    }
  }

  for (let word of words2) {
    if (wordCount[word] <= 1) {
      wordCount[word]--;
    }
  }

  for (let word of words1) {
    if (wordCount[word] === 0) {
      count++;
    }
  }

  return count;

};
console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"])); // 2

//{leetcode: 0, is: 1, amazing: 0, as: 1}  {amazing: 1, leetcode: 1, is: 1}