import { CharacterFlyweight } from "./CharacterFlyweight";

export class Character implements CharacterFlyweight {
  private readonly fontStyle: string;
  private readonly color: string;
  private readonly fontSize: number;
  constructor(
    fontStyle: string,
    color: string,
    fontSize: number
  ) {
    this.fontSize = fontSize;
    this.fontStyle = fontStyle;
    this.color = color;
  }

  display(character: string): void {
    console.log(
      `Character: ${character}, Font style: ${this.fontStyle}, Font size: ${this.fontSize}, Color: ${this.color}`
    );
  }
}
