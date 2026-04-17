// String Math
// Given a string with numbers and other characters, perform math on the numbers based on the count of non-digit characters between the numbers.

// If the count of characters separating two numbers is even, use addition.
// If it's odd, use subtraction.
// Consecutive digits form a single number.
// Operations are applied left to right.
// Ignore leading and trailing characters that aren't digits.
// For example, given "3ab10c8", return 5. Add 3 and 10 to get 13 because there's an even number of characters between them. Then subtract 8 from 13 because there's an odd number of characters between the result and 8.

function doMath(str) {
    const nums = str.match(/\d+/g).map(Number)
    const characters = str.split(/\d+/)
    
    let total = nums[0]
    for(let i = 1; i < nums.length; i++){
        const separationLength = characters[i].length
        if(separationLength % 2 === 0) total += nums[i]
        else total -= nums[i]
    }
    return total
}


console.log(doMath("3ab10c8")); // 5
console.log(doMath("6MINUS4")); // 2
console.log(doMath("9plus3")); // 12
console.log(doMath("5fkwo#10i#%.<>15P=@20!#B/25")); // 15
console.log(doMath("a.67,1$lk6ldf34@#LD@]2d32d2'2l3,@l3L#@2gh35s09if=df#$t9sm49t0df3$^%[vc;:0:4mt")); // 67