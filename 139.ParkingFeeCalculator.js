// Parking Fee Calculator
// Given two strings representing the time you parked your car and the time you picked it up, calculate the parking fee.

// The given strings will be in the format "HH:MM" using a 24-hour clock. So "14:00" is 2pm for example.
// The first string will be the time you parked your car, and the second will be the time you picked it up.
// If the pickup time is earlier than the entry time, it means the parking spanned past midnight into the next day.
// Fee rules:

// Each hour parked costs $3.
// Partial hours are rounded up to the next full hour.
// If the parking spans overnight (past midnight), an additional $10 overnight fee is applied.
// There is a minimum fee of $5 (only used if the total would be less than $5).
// Return the total cost in the format "$cost", "$5" for example.

function calculateParkingFee(parkTime, pickupTime) {
    const BASE_FEE = 3;
    const OVERNIGHT_FEE = 10;
    const MIN_FEE = 5;

    const parkTimeMinutes = timeToMinutes(parkTime);
    const pickupTimeMinutes = timeToMinutes(pickupTime);
    const diff = pickupTimeMinutes - parkTimeMinutes;
    const overnight = diff <= 0;
    const duration = overnight ? diff + 24 * 60 : diff;
    const hours = Math.ceil(duration / 60);
    let totalFee = hours * BASE_FEE + (overnight ? OVERNIGHT_FEE : 0);
    totalFee = totalFee < MIN_FEE ? MIN_FEE : totalFee;
    return `$${totalFee}`;
}

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}


console.log(calculateParkingFee("09:00", "11:00")); // "$6".
console.log(calculateParkingFee("10:00", "10:30")); // "$5".
console.log(calculateParkingFee("08:10", "10:45")); // "$9".
console.log(calculateParkingFee("14:40", "23:10")); // "$27".
console.log(calculateParkingFee("18:15", "01:30")); // "$34".
console.log(calculateParkingFee("11:11", "11:10")); // "$82".