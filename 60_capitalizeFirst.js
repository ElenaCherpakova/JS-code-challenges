// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.



function capitalizeFirst(array) {
  if (array.length === 0) return [];
  return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
}



console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']