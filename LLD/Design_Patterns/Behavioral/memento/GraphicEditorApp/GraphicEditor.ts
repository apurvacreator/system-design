import { EditorMemento } from "./EditorMemento";

export class GraphicEditor {
  private shapeType: string;
  private color: string;
  private size: string;
  private x: number;
  private y: number;

  getShape() {
    return `
    Shape: ${this.shapeType}
    Color: ${this.color}
    Size: ${this.size}
    Postion: (x: ${this.x}, y: ${this.y})
    `;
  }

  setShape(
    shapeType: string,
    color: string,
    size: string,
    x: number,
    y: number
  ) {
    this.shapeType = shapeType;
    this.color = color;
    this.size = size;
    this.x = x;
    this.y = y;
  }

  save() {
    return new EditorMemento(
      this.shapeType,
      this.color,
      this.size,
      this.x,
      this.y
    );
  }

  restore(memento: EditorMemento) {
    this.shapeType = memento.getShapeType();
    this.color = memento.getColor();
    this.size = memento.getSize();
    this.x = memento.getX();
    this.y = memento.getY();
  }
}
