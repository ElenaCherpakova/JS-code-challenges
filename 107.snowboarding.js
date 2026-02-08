// 2026 Winter Games Day 2: Snowboarding
// Given a snowboarder's starting stance and a rotation in degrees, determine their landing stance.

// A snowboarder's stance is either "Regular" or "Goofy".
// Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
// The landing stance flips every 180 degrees of rotation.
// For example, given "Regular" and 90, return "Regular". Given "Regular" and 180 degrees, return "Goofy".

// even - same stance
// odd - different stance
function getLandingStance(startStance, rotation) {
    const rotations = Math.floor(Math.abs(rotation) / 180);
    const isEven = rotations % 2 === 0;
    if (isEven) {
        return startStance;
    }
    return startStance === "Regular" ? "Goofy" : "Regular";

}


console.log(getLandingStance("Regular", 90)); // "Regular".
console.log(getLandingStance("Regular", 180)); // "Goofy".
console.log(getLandingStance("Goofy", -270)); // "Regular".
console.log(getLandingStance("Regular", 2340)); // "Goofy".
console.log(getLandingStance("Goofy", 2160)); // "Goofy".
console.log(getLandingStance("Goofy", -540)); // "Regular".