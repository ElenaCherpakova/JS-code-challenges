// Sum the Letters
// Given a string, return the sum of its letters.

// Letters are A-Z in uppercase or lowercase
// Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
// Uppercase and lowercase letters have the same value.
// Ignore all non-letter characters.

function sumLetters(str) {
    const rgx = /[a-zA-z]/g;
    const chars = str.match(rgx) || [];

    return chars.reduce((acc, curr) => acc + curr.toLowerCase().charCodeAt(0) - 96, 0);
}
sumLetters("Hello"); // 52.
sumLetters("freeCodeCamp"); // 94.
sumLetters("The quick brown fox jumps over the lazy dog."); // 473.
sumLetters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci."); // 1681.
sumLetters("</404>"); // 0.