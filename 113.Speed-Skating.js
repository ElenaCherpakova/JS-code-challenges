// 2026 Winter Games Day 7: Speed Skating
// Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the difference in lap times is the largest.

// The first element of each array corresponds to lap 1, the second to lap 2, and so on.
function largestDifference(skater1, skater2) {
    let max = -Infinity;
    let lapNum = 1;
    for (let i = 0; i < skater1.length; i++) {
        const difference = Math.abs(skater1[i] - skater2[i]);
        if (difference > max) {
            max = difference;
            lapNum = i + 1;
        }
    };
    return lapNum;
}


console.log(largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30])); // 3
console.log(largestDifference([27.04, 25.94, 26.22, 26.07, 26.18], [25.59, 25.80, 26.11, 26.01, 26.23])); // 1
console.log(largestDifference([25.82, 25.90, 26.05, 26.00, 26.48], [25.85, 25.92, 26.07, 25.98, 25.95])); // 5
console.log(largestDifference([25.88, 26.10, 25.95, 26.05, 26.00], [25.90, 26.55, 25.92, 26.03, 26.01])); // 2
console.log(largestDifference([25.92, 26.01, 26.05, 25.88, 26.12], [25.95, 26.00, 26.03, 26.45, 26.10])); // 4