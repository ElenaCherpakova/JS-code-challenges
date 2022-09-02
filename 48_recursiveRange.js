
/*Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function*/


function recursiveRange(num) {
  let sum = 0;
  if (num === 0) return 0;
  sum = num + recursiveRange(num - 1)
  return sum
}


// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 
console.log(recursiveRange(20)) // 210