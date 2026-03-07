// Smallest Gap
// Given a string, return the substring between the two identical characters that have the smallest number of characters between them (smallest gap).

// There will always be at least one pair of matching characters.
// The returned substring should exclude the matching characters.
// If two or more gaps are the same length, return the characters from the first one.
// For example, given "ABCDAC", return "DA".

// Only "A" and "C" repeat in the string.
// The number of characters between the two "A" characters is 3, and between the "C" characters is 2.
// So return the string between the two "C" characters.
function smallestGap(str) {
    const map = {};
    let res = '';
    let minGap = Infinity;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char in map) {
            const prevIndex = map[char];
            const gap = i - prevIndex - 1;
            if (gap < minGap) {
                minGap = gap;
                res = str.slice(prevIndex + 1, i)
            }
        }
        map[char] = i;
    }
    return res;
}


console.log(smallestGap("ABCDAC")); // "DA".
console.log(smallestGap("racecar")); // "e".
console.log(smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4")); // "#q6e&rkf(p".
console.log(smallestGap("Hello World")); // "".
console.log(smallestGap("The quick brown fox jumps over the lazy dog.")); // "fox".