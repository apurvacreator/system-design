import { GamePiece } from "./GamePiece";
import { GameUnit } from "./GameUnit";

export class GameBoard implements GameUnit<GameBoard> {
  private pieces: GamePiece[] = [];

  addPiece(color: string, position: number) {
    this.pieces.push(new GamePiece(color, position));
  }

  showBoard() {
    for (const piece of this.pieces) {
      console.log(piece.getColor(), piece.getPosition());
    }
  }

  clone(): GameBoard {
    const newBoard = new GameBoard();
    for (const piece of this.pieces) {
      newBoard.addPiece(
        piece.getColor(),
        piece.getPosition()
      );
    }
    return newBoard;
  }
}
