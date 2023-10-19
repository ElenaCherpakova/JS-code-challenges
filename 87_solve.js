// function solve(arr) {
//   let result = [];
//   let seen = {};

//   for (let i = arr.length - 1; i >= 0; i--) {
//     let element = arr[i];
//     if (!seen.hasOwnProperty(element)) {
//       result.unshift(element);
//       seen[element] = true;
//     }
//   }
//   return result;
// }

function solve(arr){
   return [...new Set(arr.reverse())].reverse();
   
}


console.log(solve([3, 4, 4, 3, 6, 3]));
