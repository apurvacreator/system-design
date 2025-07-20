import { GameUnit } from "./GameUnit";

export class GamePiece implements GameUnit<GamePiece> {
  private color: string;
  private position: number;

  constructor(color, position) {
    this.color = color;
    this.position = position;
  }

  getColor() {
    return this.color;
  }

  getPosition() {
    return this.position;
  }

  clone(): GamePiece {
    return new GamePiece(this.color, this.position);
  }
}
