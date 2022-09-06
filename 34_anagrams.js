/*Given 2 strings, write a function to determine if second string is an anagram of the first*/

function validAnagram(first, second) {
  let str1 = first.toLowerCase();
  let str2 = second.toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }

  const lookUp = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    //if letter exist => increment by 1
    lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    //can't find letter or letter doesn't exist it's not anagram
    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram(' ', ' '));
console.log(validAnagram('aaz', 'zaa'));
console.log(validAnagram('rat', 'cat'));
console.log(validAnagram('donjohnjava', 'javajohndon'));
console.log(validAnagram('Secure', 'Rescue'));

//Time Complexity 0(n)
