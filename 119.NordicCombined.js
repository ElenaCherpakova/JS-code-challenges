// 2026 Winter Games Day 13: Nordic Combined
// Given an array of jump scores for athletes, calculate their start delay times for the cross-country portion of the Nordic Combined.

// The athlete with the highest jump score starts first (0 second delay). All other athletes start later based on how far behind their jump score is compared to the best jump.

// To calculate the delay for each athlete, subtract the athlete's jump score from the best overall jump score and multiply the result by 1.5. Round the delay up to the nearest integer.

function calculateStartDelays(jumpScores) {
    if(jumpScores.length === 0) return []
    const bestJumpScore = Math.max(...jumpScores);

    return jumpScores.map(score => Math.ceil((bestJumpScore - score) * 1.5));
}


console.log(calculateStartDelays([120, 110, 125])); // [8, 23, 0].
console.log(calculateStartDelays([118, 125, 122, 120])); // [11, 0, 5, 8].
console.log(calculateStartDelays([100, 105, 95, 110, 120, 115, 108])); // [30, 23, 38, 15, 0, 8, 18].
console.log(calculateStartDelays([130, 125, 128, 120, 118, 122, 127, 115, 132, 124])); // [3, 11, 6, 18, 21, 15, 8, 26, 0, 12].