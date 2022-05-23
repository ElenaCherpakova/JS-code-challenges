let arr = []
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0){
    return [startNum]
  }
  else {
    let down = rangeOfNumbers(startNum, endNum - 1)
    down.push(endNum)
    return down
  }
};
console.log(rangeOfNumbers(1,5))
