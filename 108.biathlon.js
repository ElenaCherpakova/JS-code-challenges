// 2026 Winter Games Day 3: Biathlon
// Given an array of integers, where each value represents 
// the number of targets hit in a single round of a biathlon, 
// return the total penalty distance the athlete must ski.
// Each round consists of 5 targets.
// Each missed target results in a 150 meter penalty loop.
function calculatePenaltyDistance(rounds) {

    return rounds.reduce((total, hints) => total + ((5 - hints) * 150), 0);
}

console.log(calculatePenaltyDistance([4, 4])); // return 300
console.log(calculatePenaltyDistance([5, 5])); // return 0
console.log(calculatePenaltyDistance([4, 5, 3, 5])); // return 450
console.log(calculatePenaltyDistance([5, 4, 5, 5])); // return 150
console.log(calculatePenaltyDistance([4, 3, 0, 3])); // return 1500