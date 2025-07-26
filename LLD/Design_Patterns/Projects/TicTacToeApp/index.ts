import { Board } from "./Board";
import { Player } from "./Player";
import { TicTacToeGame } from "./TicTacToeGame";

const max = new Player("Max", "X");
const bob = new Player("Bob", "O");

const game1 = new TicTacToeGame([max, bob], new Board());

game1.makeMove(2, 3);
game1.makeMove(1, 2);
game1.makeMove(2, 2);
game1.makeMove(2, 1);
game1.makeMove(1, 1);
game1.makeMove(3, 3);
game1.makeMove(3, 2);
game1.makeMove(3, 1);
game1.makeMove(1, 3);

console.log("======================");

const alice = new Player("Alice", "X");
const mary = new Player("Mary", "O");

const game2 = new TicTacToeGame([alice, mary], new Board());

game2.makeMove(2, 2);
game2.makeMove(1, 3);
game2.makeMove(1, 1);
game2.makeMove(1, 2);
game2.makeMove(2, 2);
game2.makeMove(3, 3);
