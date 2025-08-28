/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    let stack = [];
    for (let char of s) {
        if (obj[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (obj[last] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));