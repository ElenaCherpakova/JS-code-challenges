/*Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.*/

function maxSubarraySum(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1])
    max = Math.max(max, arr[i])
  }
  return max
}
console.log(maxSubarraySum([1, 2, 3, -2, 5]))
console.log(maxSubarraySum([-1, -2, -3, -4])) 


//Time Complexity O(n)
//Space Complexity O(1)