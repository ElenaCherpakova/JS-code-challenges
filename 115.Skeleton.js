// 2026 Winter Games Day 9: Skeleton
// Given a string representing the curves on a skeleton track, determine the difficulty of the track.

// The given string will only consist of the letters:

// "L" for a left turn
// "R" for a right turn
// "S" for a straight segment
// Each direction change adds 15 points (an "L" followed by an "R" or vice versa).

// All other curves add 5 points each (all other "L" or "R" characters).

// Straight segments add 0 points.

// The difficulty of the track is based on the total score. Return:

// "Easy" if the total is 0 - 100
// "Medium" if the total is 101-200
// "Hard" if the total is over 200

function getDifficulty(track) {
    // edge cases 
    const allowed = new Set(["L", "R", "S"]);
    const valid = [...track].every(char => allowed.has(char));
    if (typeof track !== "string" || !valid) return "Invalid Input";
    if (track.length === 0) return "Easy";
    let score = 0;
    let prevTurn = null;
    for (let char of track) {
        if (char === "R" || char === "L") {
            const isDirectionChange =
                (char === "R" && prevTurn === "L") || (char === "L" && prevTurn === "R");
            score += isDirectionChange ? 15 : 5;
        }
        prevTurn = char;
    }
    if (score <= 100) return 'Easy';
    if (score <= 200) return 'Medium';
    else return 'Hard';
}

console.log(getDifficulty("SLSLLSRRLSRLRL")); // "Easy".
console.log(getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS")); // "Hard".
console.log(getDifficulty("SRRRRLSLLRLRSSRLSRL")); // "Medium".
console.log(getDifficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL")); // "Hard".
console.log(getDifficulty("SLLSSLRLSLSLRSLSSLRL")); // "Medium".
console.log(getDifficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR")); // "Easy".