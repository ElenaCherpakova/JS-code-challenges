// Truncate the Text
// Given a string, return it as-is if it's 20 characters or shorter. If it's longer than 20 characters, truncate it to the first 17 characters and append "..." to the end of it (so it's 20 characters total) and return the result.

function truncateText(text) {
    return text.length <= 20 ? text :
        text.slice(0, 17).concat('...');
}

console.log(truncateText("Hello, world!"))
console.log(truncateText("This string should get truncated.")) // "This string shoul..."
console.log(truncateText("Exactly twenty chars")) // "Exactly twenty chars"