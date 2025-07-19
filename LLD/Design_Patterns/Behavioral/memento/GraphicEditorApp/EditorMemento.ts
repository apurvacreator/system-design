export class EditorMemento {
  constructor(
    private readonly shapeType: string,
    private readonly color: string,
    private readonly size: string,
    private readonly x: number,
    private readonly y: number
  ) {}

  getShapeType() {
    return this.shapeType;
  }

  getColor() {
    return this.color;
  }

  getSize() {
    return this.size;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }
}
