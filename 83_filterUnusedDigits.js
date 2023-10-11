function unusedDigits(...arg) {
  let arr = arg.join("");
  let num = [...'0123456789'];
  return num.filter((ch) => !arr.includes(ch)).join('');
}

console.log((unusedDigits(12, 34, 56, 78), '09'));
console.log((unusedDigits(2015, 8, 26), '3479'));
