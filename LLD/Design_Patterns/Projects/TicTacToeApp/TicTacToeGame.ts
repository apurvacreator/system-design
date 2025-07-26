import { Board } from "./Board";
import { Player } from "./Player";

export class TicTacToeGame {
  private currentPlayerIndex: number = 0;
  private winner: Player;

  constructor(
    private players: Player[],
    private board: Board
  ) {}

  makeMove(row: number, column: number): void {
    const currentPlayer =
      this.players[this.currentPlayerIndex];
    if (this.winner || currentPlayer.getMoves() === 0) {
      return;
    }

    const piece = currentPlayer.getPiece();
    if (this.board.isValidMove(row, column)) {
      this.board.setCell(row, column, piece);
      this.board.printBoard();

      currentPlayer.decrementMoves();
      // Check if player won
      if (this.board.hasPlayerWon(piece)) {
        this.winner = currentPlayer;
        console.log(
          `${currentPlayer.getName()} won the game`
        );
        return;
      }

      this.currentPlayerIndex = 1 - this.currentPlayerIndex;

      if (
        this.players[this.currentPlayerIndex].getMoves() ===
        0
      ) {
        console.log("Game Over");
        return;
      }
    } else {
      console.log("Invalid Move");
    }
  }
}
