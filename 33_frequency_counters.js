/* write a function, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding values squared in the second array. The frequency of values mush be the same */

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let num of arr1) {
//     let correctIndex = arr2.indexOf(num ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }


//Time complexity 0(N^2): there are 2 nested loops:1) for loop O(N) and 2)indexOf 0(N)


// Refactoring: Time complexity O(N):

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frqCounter1 = {};
  let frqCounter2 = {};

  for (let num of arr1) {
    frqCounter1[num] = (frqCounter1[num] || 0) + 1;
  }
  for (let num of arr2) {
    frqCounter2[num] = (frqCounter2[num] || 0) + 1;
  }
  for (let key in frqCounter1) {
    //check if key squared is that a key in frqCounter2
    if (!(key ** 2 in frqCounter2)) {
      return false;
    }
    //check if values correspond
    if (frqCounter2[key ** 2] !== frqCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 4, 1, 4]))
console.log(same([1, 2, 3], [1, 9]))
console.log(same([1, 2, 1], [4, 4, 1]))