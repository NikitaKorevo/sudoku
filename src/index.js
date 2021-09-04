module.exports = function solveSudoku(matrix) {
  const size = 9;
  const box = 3;

  const searchEmptyCell = (matrix) => {
    for (let row = 0; row < size; row++) {
      for (let column = 0; column < size; column++) {
        if (matrix[row][column] === 0) return [row, column];
      }
    }
      return null;
  }

  const testNumInEmptyCell = (num, emptyCell, matrix) => {
    const [row, column] = emptyCell;

    for (let i = 0; i < size; i++) {
      if (matrix[i][column] === num && i !== row) {
        return false;
      }
    }

    for (let i = 0; i < size; i++) {
      if (matrix[row][i] === num && i !== column) {
        return false;
      }
    }

    const boxRow = Math.floor(row / box) * box;
    const boxColumn = Math.floor(column / box) * box;

    for (let i = boxRow; i < boxRow + box; i++) {
      for (let j = boxColumn; j < boxColumn + box; j++) {
        if (matrix[i][j] === num && i !== row && j !== column) return false;
      }
    }

    return true;
  }

  const solveMatrix = () => {
    const emptyCell = searchEmptyCell(matrix);

    if (emptyCell === null) return true;

    for (let i = 1; i < size + 1; i++) {
      const num = i;
      const isValid = testNumInEmptyCell(num, emptyCell, matrix);

      if (isValid) {
        const [row, column] = emptyCell;
        matrix[row][column] = num;

        if (solveMatrix()) return true;

        matrix[row][column] = 0;
      }
    }
    return false;
  }

  solveMatrix();
  console.log(matrix);
  return matrix;
}
