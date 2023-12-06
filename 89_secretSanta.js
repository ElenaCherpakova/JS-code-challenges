const people = ['Alice', 'Bob', 'Carly', 'Dan', 'Ed', 'Ferdinand', 'Ginny'];
function generateSecretSantaPairs(arr) {
  let index = Math.floor(Math.random() * arr.length);

  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = arr[(index + i + 1) % arr.length];
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
