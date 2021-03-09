module.exports = function countCats(matrix) {
  let catsCounter = 0;
  for (row of matrix) {
    for (item of row) {
      if (item === '^^') catsCounter += 1;
    }
  }

  return catsCounter;
};
