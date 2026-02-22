// 2026 Winter Games Day 17: Closing Day
// Given a 2D array of medal winners, return a medal count for each country as a CSV string.

// In the given array, each sub-array represents a single event: [gold_winner, silver_winner, bronze_winner]

// The returned CSV string should have the following format, with the first line being headers:

// Country,Gold,Silver,Bronze,Total
// country_name,gold_count,silver_count,bronze_count,total_medals
// Separate new lines with the new line character ("\n").
// Do not include spaces around commas or at the end of lines.
// Sort the returned CSV by gold medal count, highest first. If two countries have the same gold medal count, sort the tied ones alphabetically.
// For example, given:

// [
//   ["USA", "CAN", "NOR"],
//   ["NOR", "USA", "CAN"],
//   ["USA", "NOR", "SWE"]
// ]
// Return:

// "Country,Gold,Silver,Bronze,Total\nUSA,2,1,0,3\nNOR,1,1,1,3\nCAN,0,1,1,2\nSWE,0,0,1,1"
// Which looks like this when printed:

// Country,Gold,Silver,Bronze,Total
// USA,2,1,0,3
// NOR,1,1,1,3
// CAN,0,1,1,2
// SWE,0,0,1,1


function countMedals(winners) {
    const obj = {};

    for (let medal_type of winners) {
        const [gold, silver, bronze] = medal_type;
        if (!obj[gold]) obj[gold] = { gold: 0, silver: 0, bronze: 0 };
        obj[gold].gold += 1;

        if (!obj[silver]) obj[silver] = { gold: 0, silver: 0, bronze: 0 };
        obj[silver].silver += 1;

        if (!obj[bronze]) obj[bronze] = { gold: 0, silver: 0, bronze: 0 };
        obj[bronze].bronze += 1;
    }
    const entries = Object.entries(obj);
    const sorted = entries.sort((a, b) => {
        if (a[1].gold !== b[1].gold) return b[1].gold - a[1].gold;
        return a[0].localeCompare(b[0]);
    });
    let res = `Country,Gold,Silver,Bronze,Total`;
    for (let [country, medal_type] of sorted) {
        const { gold, silver, bronze } = medal_type;
        const total = gold + silver + bronze;
        res += `\n${country},${gold},${silver},${bronze},${total}`;
    }
    return res;
}







console.log(countMedals([["USA", "CAN", "NOR"], ["NOR", "USA", "CAN"], ["USA", "NOR", "SWE"]])); // "Country,Gold,Silver,Bronze,Total\nUSA,2,1,0,3\nNOR,1,1,1,3\nCAN,0,1,1,2\nSWE,0,0,1,1".
console.log(countMedals([["NOR", "SWE", "FIN"]])); // "Country,Gold,Silver,Bronze,Total\nNOR,1,0,0,1\nFIN,0,0,1,1\nSWE,0,1,0,1".
console.log(countMedals([["ITA", "CHN", "CHN"], ["JPN", "ITA", "JPN"]])); // "Country,Gold,Silver,Bronze,Total\nITA,1,1,0,2\nJPN,1,0,1,2\nCHN,0,1,1,2".
console.log(countMedals([["USA", "CAN", "NOR"], ["GER", "FRA", "ITA"], ["JPN", "KOR", "CHN"], ["SWE", "FIN", "NOR"], ["CAN", "USA", "SWE"], ["FRA", "GER", "ITA"]])); // "Country,Gold,Silver,Bronze,Total\nCAN,1,1,0,2\nFRA,1,1,0,2\nGER,1,1,0,2\nJPN,1,0,0,1\nSWE,1,0,1,2\nUSA,1,1,0,2\nCHN,0,0,1,1\nFIN,0,1,0,1\nITA,0,0,2,2\nKOR,0,1,0,1\nNOR,0,0,2,2"
console.log(countMedals([["ESP", "ITA", "FRA"], ["ITA", "ESP", "GER"], ["NOR", "SWE", "FIN"], ["FIN", "NOR", "SWE"], ["USA", "CAN", "MEX"], ["CAN", "USA", "MEX"], ["JPN", "KOR", "CHN"], ["CHN", "JPN", "KOR"]])); // "Country,Gold,Silver,Bronze,Total\nCAN,1,1,0,2\nCHN,1,0,1,2\nESP,1,1,0,2\nFIN,1,0,1,2\nITA,1,1,0,2\nJPN,1,1,0,2\nNOR,1,1,0,2\nUSA,1,1,0,2\nFRA,0,0,1,1\nGER,0,0,1,1\nKOR,0,1,1,2\nMEX,0,0,2,2\nSWE,0,1,1,2".
console.log(countMedals([["USA", "CAN", "GER"], ["NOR", "SWE", "FIN"], ["USA", "NOR", "SWE"], ["GER", "FRA", "ITA"], ["JPN", "KOR", "CHN"], ["USA", "GER", "CAN"], ["SWE", "NOR", "FIN"], ["CAN", "USA", "NOR"], ["FRA", "GER", "ITA"], ["JPN", "CHN", "KOR"], ["SWE", "FIN", "NOR"], ["GER", "ITA", "FRA"]])); // "Country,Gold,Silver,Bronze,Total\nUSA,3,1,0,4\nGER,2,2,1,5\nJPN,2,0,0,2\nSWE,2,1,1,4\nCAN,1,1,1,3\nFRA,1,1,1,3\nNOR,1,2,2,5\nCHN,0,1,1,2\nFIN,0,1,2,3\nITA,0,1,2,3\nKOR,0,1,1,2".