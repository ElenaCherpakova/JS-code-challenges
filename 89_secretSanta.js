const people = ['Alice', 'Bob', 'Carly', 'Dan', 'Ed', 'Ferdinand', 'Ginny'];

// shuffle an array using Fisher-Yates Sorting Algorithm
function shuffleArr(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateSecretSantaPairs(arr) {
  shuffleArr(arr);
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = arr[(i + 1) % arr.length];
  }
  return result;
}

console.log(generateSecretSantaPairs(people));

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */
