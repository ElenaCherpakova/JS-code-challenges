function queueTime(customers, n) {
  if (!customers.length) return 0;

  const queue = [...customers];
  const tills = Array(Math.min(queue.length, n)).fill(0);
  while (queue.length) {
    const customer = queue.shift();
    const tillMinId = tills.indexOf(Math.min(...tills));
    tills[tillMinId] += customer;
  }
  return Math.max(...tills);
}

console.log(queueTime([], 1)); // 0
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
