function StringPeriods(str) {
  for (let i = 1; i < str.length / 2; i++) {
    let substr = str.substring(0, i);
    let repeated = substr.repeat(Math.ceil(str.length / substr.length));
    if (repeated.startsWith(str)) {
      return substr;
    }
  }
  return -1;
}

console.log(StringPeriods('aaa'));
