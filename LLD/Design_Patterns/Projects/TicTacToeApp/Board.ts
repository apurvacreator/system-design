export class Board {
  private cells: string[][];

  constructor() {
    this.cells = Array.from({ length: 3 }, () =>
      Array(3).fill("_")
    );
  }

  isValidMove(row: number, column: number): boolean {
    return this.cells[row - 1][column - 1] === "_";
  }

  printBoard(): void {
    for (const row of this.cells) {
      console.log(row.join(" "));
    }
  }

  getCells() {
    return this.cells;
  }

  setCell(row: number, column: number, piece) {
    this.cells[row - 1][column - 1] = piece;
  }

  hasPlayerWon(piece: string): boolean {
    // Check rows
    for (const row of this.cells) {
      if (row.every((cell) => cell === piece)) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (this.cells.every((row) => row[i] === piece)) {
        return true;
      }
    }

    // Check diagonals
    if (
      this.cells[0][0] === piece &&
      this.cells[1][1] === piece &&
      this.cells[2][2] === piece
    ) {
      return true;
    }
    if (
      this.cells[0][2] === piece &&
      this.cells[1][1] === piece &&
      this.cells[2][0] === piece
    ) {
      return true;
    }

    return false;
  }
}
