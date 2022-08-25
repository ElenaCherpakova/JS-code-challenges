/*Given 2 strings, write a function to determine if second string is an anagram of the first*/

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookUp = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exist => increment by 1
    lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //can't find letter or letter doesn't exist it's not anagram 
    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram(' ', ' '))
console.log(validAnagram('aaz', 'zaa'))
console.log(validAnagram('rat', 'cat'))
console.log(validAnagram('donjohnjava', 'javajohndon'))

//Time Complexity 0(n)