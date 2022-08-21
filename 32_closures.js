function createPlayer(name) {
  let score = 0;
  return function scoreCount() {
    score++;
    return `${name} - ${score}`;
  }
}

const playerOne = createPlayer("Elena")
console.log(playerOne())