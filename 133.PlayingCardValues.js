// Playing Card Values
// Given an array of playing cards, return a new array with the numeric value of each card.

// Card Values:

// An Ace ("A") has a value of 1.
// Numbered cards ("2" - "10") have their face value: 2 - 10, respectively.
// Face cards: Jack ("J"), Queen ("Q"), and King ("K") are each worth 10.
// Suits:

// Each card has a suit: Spades ("S"), Clubs ("C"), Diamonds ("D"), or Hearts ("H").
// Card Format:

// Each card is represented as a string: "valueSuit". For Example: "AS" is the Ace of Spades, "10H" is the Ten of Hearts, and "QC" is the Queen of Clubs.

function cardValues(cards) {

    const CARD_VALUES = {
        "A": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 10,
        "Q": 10,
        "K": 10
    };
    return cards.map(card => CARD_VALUES[card.slice(0, -1)]);
}

console.log(cardValues(["3H", "4D", "5S"])); // [3, 4, 5].
console.log(cardValues(["AS", "10S", "10H", "6D", "7D"])); // [1, 10, 10, 6, 7].
console.log(cardValues(["8D", "QS", "2H", "JC", "9C"])); // [8, 10, 2, 10, 9].
console.log(cardValues(["AS", "KS"])); // [1, 10].
console.log(cardValues(["10H", "JH", "QH", "KH", "AH"])); // [10, 10, 10, 10, 1].