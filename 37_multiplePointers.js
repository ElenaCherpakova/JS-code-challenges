
/* Time complexity O(N^2)
  Space complexity O(1)*/

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

/* Time complexity O(N)
Space complexity O(1)*/

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]]
    }
    else right > 0 ? right-- : left++
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4])) // [0, -4, -3, -2, -1, 1, 2, 3, 4]