function generateBoard(queenOne, queenTwo) {
  // create an empty chess board
  let board = Array.apply(null, Array(8)).map(function () {return Array.apply(null, Array(8)).map(function () {return 0})});
  
  // add in the queens
  board[queenOne[0]][queenOne[1]] = 1;
  board[queenTwo[0]][queenTwo[1]] = 1;

  return board;
};

const queenThreat = function (board) {
  // find a queen position
  let found = false;
  let foundRow;
  let foundCol;
  let row = 0;
  while (row < board.length) {
    for (let column = 0; column < board[row].length; column++) {
      if (board[row][column] === 1) {
        found = true;
        foundRow = row;
        foundCol = column;
        break;
      }
    }
    if (found === true) {
      break;
    }
    row++;
  }

  //checking the same row
  let temp = board;
  temp[foundRow][foundCol] = 0;
  if (temp[foundRow].includes(1)) {
    return true;
  } 

  // Checking upwards column and diagonals
  let leftDiag = foundCol - 1;
  let rightDiag = foundCol + 1;
  let columnUp = foundRow - 1;
  let columnDown = foundRow + 1;
  while (columnUp >= 0 || columnDown < 8) {
    // check each level within the same column
    if (columnUp >= 0) {
      if (board[columnUp][foundCol] === 1) {
        return true;
      }
    }

    if (columnDown < 8) {
      if (board[columnDown][foundCol]) {
        return true;
      }
    }
  
    // check each level for the left diagonal 
    if (leftDiag > 0) {
      if (columnDown < 8) {
        if (board[columnDown][leftDiag] === 1) {
          return true;
        }
      } if (columnUp >= 0) {
        if (board[columnDown][leftDiag] === 1) { 
          return true;
        }
      }
    } 
  
    // check each level for the right diagonal
    if (rightDiag > 0) {
      if (columnDown < 8) {
        if (board[columnDown][rightDiag] === 1) {
          return true;
        }
      } if (columnUp >= 0) {
        if (board[columnDown][rightDiag] === 1) { 
          return true;
        }
      }
    } 

    leftDiag--;
    rightDiag++;
    columnUp--;
    columnDown++;
  }
  return false;
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
