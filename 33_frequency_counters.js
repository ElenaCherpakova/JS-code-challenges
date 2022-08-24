/* write a function, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding values squared in the second array. The frequency of values mush be the same */

function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let num of arr1) {
    let correctIndex = arr2.indexOf(num ** 2);
    if(correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}


console.log(same([1, 2, 3], [4, 1, 9]))
console.log(same([1, 2, 3], [1, 9]))
console.log(same([1, 2, 1], [4, 4, 1]))