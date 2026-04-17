// FizzBuzz Validator
// Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

// In a valid FizzBuzz sequence:

// Multiples of 3 are replaced with "Fizz".
// Multiples of 5 are replaced with "Buzz".
// Multiples of both 3 and 5 are replaced with "FizzBuzz".
// All other numbers remain as integers.

function isFizzBuzz(arr) {
    let startValue = null;
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (typeof value === 'number') {
            startValue = value - i;
            break;
        }
    }
    let expected;
    for (let i = 0; i < arr.length; i++) {
        const num = startValue + i;
        if (num % 15 === 0) expected = "FizzBuzz";
        else if (num % 3 === 0) expected = "Fizz";
        else if (num % 5 === 0) expected = "Buzz";
        else expected = num;
        if (expected !== arr[i]) {
            return false;
        }
    }
    return true;

}


console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz"])); // should return true.
console.log(isFizzBuzz([13, 14, "FizzBuzz", 16, 17])); // should return true.
console.log(isFizzBuzz([1, 2, "Fizz", 4, 5])); // should return false.
console.log(isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"])); // should return true.
console.log(isFizzBuzz([1, 2, "Fizz", "Buzz", 5])); // should return false.
console.log(isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103])); // should return false.
console.log(isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"])); // should return true.