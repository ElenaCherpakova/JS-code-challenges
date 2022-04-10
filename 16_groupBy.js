// Write a groupBy function.

function groupBy(array, fn) {
  const res = {};
  for (let i = 0; i < array.length; i++) {
    const current = array[i]; //element
    const key = typeof fn === "function" ? fn(current) : current[fn]
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(current); //adding value (res[key])
  }
  return res;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // -> { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(["one", "two", "three"], "length")); // -> { '3': ['one', 'two'], '5': ['three'] }
