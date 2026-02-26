// Letter and Number Count
// Given a string, return a message with the count of how many letters and numbers it contains.

// Letters are A-Z and a-z.
// Numbers are 0-9.
// Ignore all other characters.
// Return "The string has X letters and Y numbers.", where "X" is the count of letters and "Y" is the count of numbers. If either count is 1, use the singular form for that item. E.g: "1 letter" instead of "1 letters" and "1 number" instead of "1 numbers".

function countLettersAndNumbers(str) {
    let numbers = 0;
    let letters = 0;

    const rgx = /[a-zA-Z0-9]/g;
    const chars = str.match(rgx) || [];
    for (let char of chars) {
        if (/[a-zA-Z]/.test(char)) letters++;
        else numbers++;
    }
    return `The string has ${letters} letter${letters !== 1 ? 's' : ''} and ${numbers} number${numbers !== 1 ? 's' : ''}.`;
}
console.log(countLettersAndNumbers("helloworld123")) // "The string has 10 letters and 3 numbers.".
console.log(countLettersAndNumbers("Catch 22")) // "The string has 5 letters and 2 numbers.".
console.log(countLettersAndNumbers("A1!")) // "The string has 1 letter and 1 number.".
console.log(countLettersAndNumbers("12345")) // "The string has 0 letters and 5 numbers.".
console.log(countLettersAndNumbers("password")) // "The string has 8 letters and 0 numbers.".