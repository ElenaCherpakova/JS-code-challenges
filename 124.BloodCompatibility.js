// Blood Type Compatibility
// Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.

// Each blood type consists of:

// A letter: "A", "B", "AB", or "O"
// And an Rh factor: "+" or "-"
// Blood types will be one of the valid letters followed by an Rh factor. For example, "AB+" and "O-" are valid blood types.

// Letter Rules:

// "O" can donate to other letter type.
// "A" can donate to "A" and "AB".
// "B" can donate to "B" and "AB".
// "AB" can donate only to "AB".
// Rh Rules:

// Negative ("-") can donate to both "-" and "+".
// Positive ("+") can donate only to "+".
// Both letter and Rh rule must pass for a donor to be able to donate to the recipient.
function canDonate(donor, recipient) {
    const letterRules = {
        "O": ["O", "A", "B", "AB"],
        "A": ["A", "AB"],
        "B": ["B", "AB"],
        "AB": ["AB"]
    };
    const rhRules = {
        "-": ["-", "+"],
        "+": ["+"]
    };

    const [donorLetter, donorRh] = [donor.slice(0, -1), donor.slice(-1)];
    const [recipientLetter, recipientRh] = [recipient.slice(0, -1), recipient.slice(-1)];
    return letterRules[donorLetter].includes(recipientLetter)
        && rhRules[donorRh].includes(recipientRh);
}

console.log(canDonate("B+", "B+")); // true.
console.log(canDonate("O-", "AB-")); // true.
console.log(canDonate("O+", "A-")); // false.
console.log(canDonate("A+", "AB+")); // true.
console.log(canDonate("A-", "B-")); // false.
console.log(canDonate("B-", "AB+")); // true.
console.log(canDonate("B-", "A+")); // false.
console.log(canDonate("O-", "O+")); // true.
console.log(canDonate("O+", "O-")); // false.
console.log(canDonate("AB+", "AB-")); // false.