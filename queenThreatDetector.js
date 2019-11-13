function generateBoard(queenOne, queenTwo) {
  // create an empty chess board
  let board = Array.apply(null, Array(8)).map(function () {return Array.apply(null, Array(8)).map(function () {return 0})});
  
  // add in the queens
  board[queenOne[0]][queenOne[1]] = 1;
  board[queenTwo[0]][queenTwo[1]] = 1;

  return board;
};

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);