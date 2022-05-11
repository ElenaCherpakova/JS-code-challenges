function squareSum(numbers) {
  // let output = 0
  // for (let i = 0; i < numbers.length; i++) {
  //   let count = numbers[i]*numbers[i]
  //   output += count
  // }
  // return output

  return numbers.reduce((sum,num) => sum + (num * num), 0);

}

console.log(squareSum([0, 3, 4, 5])) //50