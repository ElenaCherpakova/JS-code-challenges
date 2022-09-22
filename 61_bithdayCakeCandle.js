function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === max) {
            count++;
        }
    }
    return count;
}

console.log(birthdayCakeCandles([4, 4, 1, 3])); // 2


