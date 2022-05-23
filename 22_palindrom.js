let isPalindrome = function (x) {
  return (x.toString() === x.toString().split("").reverse().join(""))

}

console.log(isPalindrome(121))
console.log(isPalindrome(123))