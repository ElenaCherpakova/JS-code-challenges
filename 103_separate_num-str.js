// Letters-Numbers
// Given a string containing only letters and numbers, 
//  a new string where a hyphen (-) is inserted every time the 
// string switches from a letter to a number, or a number to a letter.

function separateLettersAndNumbers(str) {
    let res = '';
    let num = '';
    for (let elem of str) {
        if (Number.isInteger(+elem)) {
            if (!num) res += '-';
            res += elem;
            num += elem;
        } else {
            if (num) res += '-';
            num = '';
            res += elem;
        }
    }
    return res;
}

console.log(separateLettersAndNumbers("ABC123")); // ABC-123
console.log(separateLettersAndNumbers("H3LL0W0RLD")); // H-3-LL-0-W-0-RLD