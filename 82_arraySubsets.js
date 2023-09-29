// Given an integer array, divide the array into 2 subsets A and B while respecting the follosin conditions:
// A & B intersection is null
// Union is equivalent to original array
// number of elements in A is minimal
// sum of A weights > sum of B weights

function subsetA(arr) {
  //sort array in descending order
  arr.sort((a, b) => b - a);
  let A = [];
  let sumA = 0;
  let sumB = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < arr.length; i++) {
    A.push(arr[i]);
    sumA += arr[i];
    sumB -= arr[i];

    //check if sumA > sumB
    if (sumA > sumB) {
      break;
    }
  }
  // sort array in ascending order

  A.sort((a, b) => a - b);
  return A;
}

console.log(subsetA([3, 7, 5, 6, 2])); // [6,7]
