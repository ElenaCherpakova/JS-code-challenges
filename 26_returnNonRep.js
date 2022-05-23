function myFunction(array){
  for (let i = 0; i < array.length; i++){
    if (array.indexOf(array[i]) === array.lastIndexOf(array[i])){
      return array[i]
    }
   
  }
  return ""
}

console.log(myFunction('string'))
console.log(myFunction('return'))
