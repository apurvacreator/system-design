export class Player {
  private name: string;
  private piece: string;
  private moves: number;
  constructor(name, piece) {
    this.name = name;
    this.piece = piece;
    this.moves = this.piece === "X" ? 5 : 4;
  }

  getPiece() {
    return this.piece;
  }

  getName() {
    return this.name;
  }

  getMoves() {
    return this.moves;
  }

  decrementMoves() {
    this.moves--;
  }
}
