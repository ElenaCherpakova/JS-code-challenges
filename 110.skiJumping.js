// 2026 Winter Games Day 4: Ski Jumping
// Given distance points, style points, a wind compensation value, and K-point bonus value, calculate your score for the ski jump and determine if you won a medal or not.

// Your score is calculated by summing the above four values.
// The current total scores of the other jumpers are:

// 165.5
// 172.0
// 158.0
// 180.0
// 169.5
// 175.0
// 162.0
// 170.0
// If your score is the best, return "Gold"
// If it's second best, return "Silver"
// If it's third best, return "Bronze"
// Otherwise, return "No Medal"

function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
    const othersScores = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0];
    const myScore = distancePoints + stylePoints + windComp + kPointBonus;
    const [gold, silver, bronze] = othersScores.sort((a, b) => b - a);
    if (myScore > gold) return 'Gold';
    if (myScore > silver) return 'Silver';
    if (myScore > bronze) return 'Bronze';
    return 'No Medal';
}

console.log(skiJumpMedal(125.0, 58.0, 0.0, 6.0));// return "Gold".
console.log(skiJumpMedal(119.0, 50.0, 1.0, 4.0));// return "Bronze".
console.log(skiJumpMedal(122.0, 52.0, -1.0, 4.0)); // return "Silver".
console.log(skiJumpMedal(118.0, 50.5, -1.5, 4.0)); // return "No Medal".
console.log(skiJumpMedal(124.0, 50.5, 2.0, 5.0));// return "Gold".
console.log(skiJumpMedal(119.0, 49.5, 0.0, 3.0));// return "No Medal".