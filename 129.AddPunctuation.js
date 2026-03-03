// Add Punctuation
// Given a string of sentences with missing periods, add a period (".") in the following places:

// Before each space that comes immediately before an uppercase letter
// And at the end of the string
// Return the resulting string.

function addPunctuation(sentences) {

    let res = '';
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i] === ' ' && sentences[i + 1] && sentences[i + 1] === sentences[i + 1].toUpperCase()) {
            res += '.';
        }
        res += sentences[i];
    }
    if (!res.endsWith('.')) {
        res += '.';
    }
    return res;
}

console.log(addPunctuation("Hello world")); // "Hello world."
console.log(addPunctuation("Hello world It's nice today")); // "Hello world. It's nice today."
console.log(addPunctuation("JavaScript is great Sometimes")); // "JavaScript is great. Sometimes."
console.log(addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z")); // "A b c. D e. F g h. I. J k. L m n o. P. Q r. S t. U v w. X. Y. Z."
console.log(addPunctuation("Wait.. For it")); // "Wait... For it."
