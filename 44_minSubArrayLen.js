/*Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.*/

function minSubArrayLen(arr, target) {
  let sum = 0;
  let right = 0;
  let left = 0;
  let minLen = Infinity;

  while (left < arr.length) {
    // if current window doesn't add up to the given sum then 
    // move the window to right
    if (sum < target && right < arr.length) {
      sum += arr[right];
      right++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window 
    else if (sum >= target) {
      minLen = Math.min(minLen, right - left);
      sum -= arr[left];
      left++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> 
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0