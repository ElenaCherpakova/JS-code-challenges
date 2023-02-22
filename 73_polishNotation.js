function polishNotation(expression) {
  const array = expression.split(' ');
  const stack = [];
  while (array.length) {
    const el = array.pop();
    const numberEl = Number(el);

    if (!isNaN(numberEl)) {
      stack.push(el);
      continue;
    }
    const firstEl = stack.pop();
    const secondEl = stack.pop();

    switch (el) {
      case '+':
        stack.push(Number(firstEl) + Number(secondEl));
        break;
      case '-':
        stack.push(Number(firstEl) - Number(secondEl));
        break;
      case '*':
        stack.push(Number(firstEl) * Number(secondEl));
        break;
      case '/':
        stack.push(Number(firstEl) / Number(secondEl));
        break;
      default:
        break;
    }
  }
  return stack.pop();
}

console.log(polishNotation('+ 3 5'), 8);
console.log(polishNotation('+ 3 * 5 2'), 13);
