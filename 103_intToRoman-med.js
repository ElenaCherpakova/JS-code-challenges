/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const values = [
        { sym: 'M', val: 1000 },
        { sym: 'CM', val: 900 },
        { sym: 'D', val: 500 },
        { sym: 'CD', val: 400 },
        { sym: 'C', val: 100 },
        { sym: 'XC', val: 90 },
        { sym: 'L', val: 50 },
        { sym: 'XL', val: 40 },
        { sym: 'X', val: 10 },
        { sym: 'IX', val: 9 },
        { sym: 'V', val: 5 },
        { sym: 'IV', val: 4 },
        { sym: 'I', val: 1 }
    ];
    let res = '';
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i].val) {
            res += values[i].sym;
            num -= values[i].val;
        }

    }
    return res;
};

console.log(intToRoman(58));