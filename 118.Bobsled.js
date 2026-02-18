// 2026 Winter Games Day 12: Bobsled
// Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.

// The length of the array determines the team size: 1, 2 or 4 person teams.
// All given weight values are in kilograms (kg).
// The bobsled (sled by iteself) must have a minimum weight of:

// 162 kg for a 1-person team
// 170 kg for a 2-person team
// 210 kg for a 4-person team
// The total weight of the bobsled (athletes plus sled) must not exceed:

// 247 kg for a 1-person team
// 390 kg for a 2-person team
// 630 kg for a 4-person team
// Return "Eligible" if the team meets all the requirements, or "Not Eligible" if the team fails to meet one or more of the requirements.


function checkEligibility(athleteWeights, sledWeight) {
    const minWeightofSled = {
        1: 162,
        2: 170,
        4: 210
    };
    const totalWeightOfBob = {
        1: 247,
        2: 390,
        4: 630,
    };
    const teamSize = athleteWeights.length;
    const totalWeightOfAthletes = athleteWeights.reduce((total, acc) => total + acc, 0);
    const totalWeightOfAthletesWithSled = totalWeightOfAthletes + sledWeight;
    const meetMinSledWeight = sledWeight >= minWeightofSled[teamSize];
    const meetsTotalWeight = totalWeightOfAthletesWithSled <= totalWeightOfBob[teamSize];
    return meetMinSledWeight && meetsTotalWeight ? 'Eligible' : 'Not Eligible';
}

console.log(checkEligibility([78], 165)); // "Eligible".
console.log(checkEligibility([80], 160)); // "Not Eligible".
console.log(checkEligibility([80], 170)); // "Not Eligible".
console.log(checkEligibility([85, 90], 170)); // "Eligible".
console.log(checkEligibility([85, 95], 168)); // "Not Eligible".
console.log(checkEligibility([112, 97], 185)); // "Not Eligible".
console.log(checkEligibility([110, 102, 90, 106], 222)); // "Eligible".
console.log(checkEligibility([106, 99, 90, 88], 205)); // "Not Eligible".
console.log(checkEligibility([106, 99, 103, 96], 227)); // "Not Eligible".