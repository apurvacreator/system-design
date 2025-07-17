import { GameBoard } from "./GameBoard";

const board = new GameBoard();
board.addPiece("Red", 5);
board.addPiece("Black", 3);

console.log("Original board");
board.showBoard();

const newBoard = board.clone();
console.log("Cloned board");
newBoard.showBoard();

console.log(board === newBoard); // false
