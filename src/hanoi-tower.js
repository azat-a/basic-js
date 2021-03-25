module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const hanoi = {};
  hanoi.turns = Math.pow(2, disksNumber) - 1;
  hanoi.seconds = Math.floor((hanoi.turns * 3600) / turnsSpeed);

  return hanoi;
}

