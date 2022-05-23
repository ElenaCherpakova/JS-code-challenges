let flatten = function (array){
  return [].concat.apply([], array);
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));
