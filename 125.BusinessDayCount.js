// Business Day Count
// Given a start date and an end date, return the number of business days between the two.

// Given dates are in the format "YYYY-MM-DD".
// Weekdays are business days (Monday through Friday).
// Weekends are not business days (Saturday and Sunday).
// Include both the start and end dates when counting.
function countBusinessDays(start, end) {

  const startDate = new Date(start);
  const endDate = new Date(end);
  let count = 0;

  while (startDate <= endDate) {
    const dayOfWeek = startDate.getUTCDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      count++;
    }
    startDate.setUTCDate(startDate.getUTCDate() + 1);
  }

  return count;
}

console.log(countBusinessDays("2026-02-24", "2026-02-26")); // 3.
console.log(countBusinessDays("2026-02-24", "2026-02-28")); // 4.
console.log(countBusinessDays("2026-02-21", "2026-03-01")); // 5.
console.log(countBusinessDays("2026-03-08", "2026-03-17")); // 7.
console.log(countBusinessDays("2026-02-24", "2027-02-24")); // 262.