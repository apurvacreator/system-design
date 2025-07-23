import { Characterfactory } from "./CharacterFactory";
import { CharacterFlyweight } from "./CharacterFlyweight";

export class Document {
  private content = "";
  private readonly characterFactory =
    new Characterfactory();

  addCharacter(
    character: string,
    fontStyle: string,
    fontSize: number,
    color: string
  ) {
    const characterFlyweight: CharacterFlyweight =
      this.characterFactory.getCharacter(
        fontStyle,
        fontSize,
        color
      );

    this.content += character;

    characterFlyweight.display(character);
  }

  render() {
    console.log(`Document content: ${this.content}`);
  }
}
