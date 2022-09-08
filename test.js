//  3, -2, 5
function maxSubarraySum(arr) {
  let max = arr[0] //1
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1])
    max = Math.max(max, arr[i])
  }
  return max
}
console.log(maxSubarraySum([-2, 1, 3])) 