// 2026 Winter Games Day 15: Freestyle Skiing
// Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

// A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

// The two words will be separated by a single space.
// Valid first words:

// "Misty"
// "Ghost"
// "Thunder"
// "Solar"
// "Sky"
// "Phantom"
// "Frozen"
// "Polar"
// Valid second words:

// "Twister"
// "Icequake"
// "Avalanche"
// "Vortex"
// "Snowstorm"
// "Frostbite"
// "Blizzard"
// "Shadow"


const firstValidWords = new Set([
    "Misty",
    "Ghost",
    "Thunder",
    "Solar",
    "Sky",
    "Phantom",
    "Frozen",
    "Polar",
]);
const secondValidWords = new Set(["Twister",
    "Icequake",
    "Avalanche",
    "Vortex",
    "Snowstorm",
    "Frostbite",
    "Blizzard",
    "Shadow"]);

function isValidTrick(trickName) {
    const [firstName, secondName] = trickName.split(' ');

    const existFirst = firstValidWords.has(firstName);
    const existSecond = secondValidWords.has(secondName);
    return existFirst && existSecond;
}

console.log(isValidTrick("Polar Vortex")) // true.
console.log(isValidTrick("Solar Icequake")) // true.
console.log(isValidTrick("Thunder Blizzard")) // true.
console.log(isValidTrick("Phantom Frostbite")) // true.
console.log(isValidTrick("Ghost Avalanche")) // true.
console.log(isValidTrick("Snowstorm Shadow")) // false.
console.log(isValidTrick("Solar Sky")); // false.