// Digital Detox
// Given an array of your login logs, determine whether you have met your digital detox goal.
// Each log is a string in the format "YYYY-MM-DD HH:mm:ss".
// You have met your digital detox goal if both of the following statements are true:
// You logged in no more than once within any four-hour period.
// You logged in no more than 2 times on any single day.

function digitalDetox(logs) {
    let timeStamps = [];
    let dailyCounts = {};
    for (let elem of logs) {
        const [date, time] = elem.split(' ');
        const [year, month, day] = date.split('-');
        const [hours, minutes, seconds] = time.split(':');

        const objDate = [
            +year,
            +month - 1,
            +day,
            +hours,
            +minutes,
            +seconds
        ];
        const calc = new Date(...objDate).getTime();
        timeStamps.push(calc);
        const key = `${year}-${month}-${day}`;
        dailyCounts[key] = (dailyCounts[key] || 0) + 1;
        if (dailyCounts[key] > 2) {
            return false;
        }

    }


    timeStamps.sort((a, b) => a - b);
    const FOUR_HOURS = 4 * 60 * 60 * 1000;
    for (let i = 1; i < timeStamps.length; i++) {
        if ((timeStamps[i] - timeStamps[i - 1]) <= FOUR_HOURS) {
            return false;
        }

    }
    return true;
}






console.log(digitalDetox(["2026-02-01 08:00:00", "2026-02-01 12:30:00"])); // true
console.log(digitalDetox(["2026-02-01 04:00:00", "2026-02-01 07:30:00"])); // false
console.log(digitalDetox(["2026-01-31 08:21:30", "2026-01-31 14:30:00", "2026-02-01 08:00:00", "2026-02-01 12:30:00"])); // true
console.log(digitalDetox(["2026-01-31 10:40:21", "2026-01-31 15:19:41", "2026-01-31 21:49:50", "2026-02-01 09:30:00"])); // false
console.log(digitalDetox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 01:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"])); // false