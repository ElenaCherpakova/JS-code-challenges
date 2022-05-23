// function maxProfit(array) {
//   let midNumber = Math.floor(array.length / 2)
//   // console.log(array[midNumber]);
//   let output=[]
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < array[midNumber]) {
//       array[midNumber]++
//     }else if(array[i] < array[midNumber])
//     array[i]++
  
// }
// return output
// }



// const minOfArr = arr => arr.reduce((acc,x) => acc <= x ? x : x, arr[0]);
// console.log(minOfArr([45, 24, 35, 31, 40, 38, 11]))
// const maxOfArr = arr => arr.reduce((acc,x) => acc <= x ? x : acc, arr[0]);
// console.log(maxOfArr([45, 24, 35, 31, 40, 38, 11]))

// console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]))
// // [24,40,38]
// min [24, ]
// max [45, ]


const arr = [45, 24, 35, 31, 40, 38, 11]
const mid = Math.floor(arr.length/2)
console.log(mid)
const left = arr.slice(0, 4)
const right = arr.slice(4, arr.length)
console.log(left)
console.log(right)