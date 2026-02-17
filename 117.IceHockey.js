// 2026 Winter Games Day 11: Ice Hockey
// Given an array of 6 ice hockey teams and their records after the round robin games, determine the match-ups for the semi-final round.

// Each array item will have a team and their record in the format "TEAM: W-OTW-OTL-L". Where:
// "W" is the number of wins in regulation, worth 3 points each
// "OTW" is the number of overtime wins, worth 2 points each
// "OTL" is the number of overtime losses, worth 1 point each
// "L" is the number of losses, worth 0 points each
// For example, "FIN: 2-2-1-0" would have 11 points after adding up their record.

// Find the total number of points for each team and return "The semi-final games will be (1st) vs (4th) and (2nd) vs (3rd).". For example, "The semi-final games will be FIN vs SWE and CAN vs USA."
function getSemifinalMatchups(teams) {
    const obj = {};
    for (let team of teams) {
        const [abb, score] = team.split(': ');
        const [W, OTW, OTL, L] = score.split('-').map(Number);
        const totalScore = W * 3 + OTW * 2 + OTL * 1 + L * 0;
        obj[abb] = totalScore;
    }
    const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    const [first, second, third, fouth] = sorted.map(team => team[0]);
    return `The semi-final games will be ${first} vs ${fouth} and ${second} vs ${third}.`;
}

console.log(getSemifinalMatchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"])); // "The semi-final games will be FIN vs SWE and CAN vs USA.".
console.log(getSemifinalMatchups(["CAN: 2-1-1-1", "CZE: 1-1-1-2", "FIN: 1-2-1-1", "NOR: 0-1-1-3", "SLO: 1-0-1-3", "USA: 5-0-0-0"])); // "The semi-final games will be USA vs CZE and CAN vs FIN.".
console.log(getSemifinalMatchups(["CAN: 3-2-0-0", "CZE: 2-1-2-0", "LAT: 0-0-1-4", "ITA: 1-1-1-2", "DEN: 1-0-0-4", "USA: 3-1-1-0"])); // "The semi-final games will be CAN vs ITA and USA vs CZE.".
console.log(getSemifinalMatchups(["AUT: 2-2-1-0", "DEN: 1-0-0-4", "ITA: 1-1-1-2", "JPN: 3-2-0-0", "KOR: 2-1-2-0", "LAT: 0-0-1-4"])); // "The semi-final games will be JPN vs ITA and AUT vs KOR.".