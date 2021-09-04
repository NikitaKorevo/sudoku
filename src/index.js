/* module.exports = function solveSudoku(matrix) {
  let copyMatrix = matrix.slice();
  let numPassedVerification1;
  let numPassedVerification2;
  let numPassedVerification3;
  let matrixHasEmptyCell;
  let sector1 = [
    [0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]
  ];
  let sector2 = [
    [0,3], [0,4], [0,5], [1,3], [1,4], [1,5], [2,3], [2,4], [2,5]
  ];
  let sector3 = [
    [0,6], [0,7], [0,8], [1,6], [1,7], [1,8], [2,6], [2,7], [2,8]
  ];
  let sector4 = [
    [3,0], [3,1], [3,2], [4,0], [4,1], [4,2], [5,0], [5,1], [5,2]
  ];
  let sector5 = [
    [3,3], [3,4], [3,5], [4,3], [4,4], [4,5], [5,3], [5,4], [5,5]
  ];
  let sector6 = [
    [3,7], [3,8], [3,9], [4,7], [4,8], [4,9], [5,7], [5,8], [5,9]
  ];
  let sector7 = [
    [6,0], [6,1], [6,2], [7,0], [7,1], [7,2], [8,0], [8,1], [8,2]
  ];
  let sector8 = [
    [6,3], [6,4], [6,5], [7,3], [7,4], [7,5], [8,3], [8,4], [8,5]
  ];
  let sector9 = [
    [6,6], [6,7], [6,8], [7,6], [7,7], [7,8], [8,6], [8,7], [8,8]
  ];
  
  for (let num = 1; num < 10; num++) {
    console.log('num ' + num);
    matrixHasEmptyCell = false;

    for (let row = 0; row < copyMatrix.length; row++) {
      for (let column = 0; column < copyMatrix[row].length; column++) {
        if ((copyMatrix[row][column]) === 0) {
          matrixHasEmptyCell = true;
          numPassedVerification1 = true;
          numPassedVerification2 = true;
          numPassedVerification3 = true;
          // проверка по горизонтали
          for (let z = 0; z < 9; z++) {
            if (copyMatrix[row][z] === num) {
              console.log('проверка по горизонтали не прошло');
              numPassedVerification1 = false;
            }
          }
          // проверка по вертикали
          for (let x = 0; x < 9; x++) {
            
            if (copyMatrix[x][column] === num) {
              console.log('проверка по вертикали не прошло');
              numPassedVerification1 = false;
            }
          }
          // проверка по сектору 3 x 3
          let whichSector;
          switch (row) {
            case 0:
            case 1:
            case 2:
              if (column >= 0 && column <=2) {
                whichSector = sector1;
              }
              if (column >= 3 && column <=5) {
                whichSector = sector2;
              }
              if (column >= 6 && column <=8) {
                whichSector = sector3;
              }
              break;
            case 3:
            case 4:
            case 5:
              if (column >= 0 && column <=2) {
                whichSector = sector4;
              }
              if (column >= 3 && column <=5) {
                whichSector = sector5;
              }
              if (column >= 6 && column <=8) {
                whichSector = sector6;
              }
              break;
          
            case 6:
            case 7:
            case 8:
              if (column >= 0 && column <=2) {
                whichSector = sector7;
              }
              if (column >= 3 && column <=5) {
                whichSector = sector8;
              }
              if (column >= 6 && column <=8) {
                whichSector = sector9;
              }
              break;

            default:
              break;
          }
          for (let c = 0; c < whichSector.length; c++) {
            if (copyMatrix[whichSector[c][0]][whichSector[c][1]] === num) {
              console.log('3x3 не прошло');
              numPassedVerification3 = false;
            }
          }
          if (numPassedVerification1 === true && numPassedVerification2 === true && numPassedVerification3 === true) {
            console.log('Заменили ' + copyMatrix[row][column] + ' на ' + num);
            copyMatrix[row][column] = num;
          }
        }
      }
    }
    
    if (matrixHasEmptyCell === false) {
      console.log('copyMatrix:');
      console.log(copyMatrix);
      console.log('matrixHasEmptyCell: ' + matrixHasEmptyCell);
      return copyMatrix;
    }
    if (num === 9) num = 0;
  }
} */
/* 
module.exports = function solveSudoku(matrix) {
  let copyMatrix = matrix.slice();
  let numPassedVerification1;
  let numPassedVerification2;
  let numPassedVerification3;
  let matrixHasEmptyCell;
  let sector1 = [
    [0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]
  ];
  let sector2 = [
    [0,3], [0,4], [0,5], [1,3], [1,4], [1,5], [2,3], [2,4], [2,5]
  ];
  let sector3 = [
    [0,6], [0,7], [0,8], [1,6], [1,7], [1,8], [2,6], [2,7], [2,8]
  ];
  let sector4 = [
    [3,0], [3,1], [3,2], [4,0], [4,1], [4,2], [5,0], [5,1], [5,2]
  ];
  let sector5 = [
    [3,3], [3,4], [3,5], [4,3], [4,4], [4,5], [5,3], [5,4], [5,5]
  ];
  let sector6 = [
    [3,7], [3,8], [3,9], [4,7], [4,8], [4,9], [5,7], [5,8], [5,9]
  ];
  let sector7 = [
    [6,0], [6,1], [6,2], [7,0], [7,1], [7,2], [8,0], [8,1], [8,2]
  ];
  let sector8 = [
    [6,3], [6,4], [6,5], [7,3], [7,4], [7,5], [8,3], [8,4], [8,5]
  ];
  let sector9 = [
    [6,6], [6,7], [6,8], [7,6], [7,7], [7,8], [8,6], [8,7], [8,8]
  ];
  let howManyCircles = 0;

  for (let row = 0; row < copyMatrix.length; row++, howManyCircles++) {
    matrixHasEmptyCell = false;
    for (let column = 0; column < copyMatrix[row].length; column++) {
      if ((copyMatrix[row][column]) === 0) {
        for (let num = 1; num < 10; num++) {
        
          matrixHasEmptyCell = true;
          numPassedVerification1 = true;
          numPassedVerification2 = true;
          numPassedVerification3 = true;

          // проверка по горизонтали
          for (let z = 0; z < 9; z++) {
            if (copyMatrix[row][z] === num) {
              console.log('проверка по горизонтали не прошло');
              numPassedVerification1 = false;
            }
          }

          // проверка по вертикали
          for (let x = 0; x < 9; x++) {
            if (copyMatrix[x][column] === num) {
              console.log('проверка по вертикали не прошло');
              numPassedVerification2 = false;
            }
          }

          // проверка по сектору 3 x 3
          let whichSector;
          switch (row) {
            case 0:
            case 1:
            case 2:
              if (column >= 0 && column <=2) {
                whichSector = sector1;
              }
              if (column >= 3 && column <=5) {
                whichSector = sector2;
              }
              if (column >= 6 && column <=8) {
                whichSector = sector3;
              }
              break;
            case 3:
            case 4:
            case 5:
              if (column >= 0 && column <=2) {
                whichSector = sector4;
              }
              if (column >= 3 && column <=5) {
                whichSector = sector5;
              }
              if (column >= 6 && column <=8) {
                whichSector = sector6;
              }
              break;
            
            case 6:
            case 7:
            case 8:
              if (column >= 0 && column <=2) {
                whichSector = sector7;
              }
              if (column >= 3 && column <=5) {
                whichSector = sector8;
              }
              if (column >= 6 && column <=8) {
                whichSector = sector9;
              }
              break;
            default:
              break;
          }
          for (let c = 0; c < whichSector.length; c++) {
            if (copyMatrix[whichSector[c][0]][whichSector[c][1]] === num) {
              console.log('3x3 не прошло');
              numPassedVerification3 = false;
            }
          }
          if (numPassedVerification1 === true && numPassedVerification2 === true && numPassedVerification3 === true) {
            console.log('Заменили ' + copyMatrix[row][column] + ' на ' + num);
            copyMatrix[row][column] = num;
          }
        }
      }
    }
    if (matrixHasEmptyCell === false && row === 8) {
      console.log('copyMatrix:');
      console.log(copyMatrix[row]);
      console.log(copyMatrix);
      console.log('matrixHasEmptyCell: ' + matrixHasEmptyCell);
      console.log('howManyCircles ' + howManyCircles)
      console.log('Завершение');
      return copyMatrix;
    }
    // if (row === 8) row = 0;
  }
}
 */

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
      if (matrix[i][column] === num && num !== row) {
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

    for (let i = 1; i < size; i++) {
      const num = i;
      const isValid = testNumInEmptyCell(num, emptyCell, matrix);

      if (isValid) {
        const [row, column] = emptyCell;
        matrix[row][column] = num;

        if (solveMatrix()) return true;

        matrix[row,column] = 0;
      }
    }
    return false;
  }

  solveMatrix();
  return matrix;
}



/* 
module.exports = function solveSudoku(matrix) {
  return ( 
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
  )
} */