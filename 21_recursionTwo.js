function sumItems(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      //recursion if nested arrays
      result += sumItems(array[i])
    } else {
      result += array[i]
    }
  }
  return result

}


console.log(sumItems([[1, 2, [[3], 4]], 5, []]))
console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]))
module.exports = sumItems;