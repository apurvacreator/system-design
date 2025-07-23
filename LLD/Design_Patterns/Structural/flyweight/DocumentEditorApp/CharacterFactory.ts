import { Character } from "./Character";
import { CharacterFlyweight } from "./CharacterFlyweight";

export class Characterfactory {
  private characters: Map<string, CharacterFlyweight> =
    new Map();

  getCharacter(
    fontStyle: string,
    fontSize: number,
    color: string
  ): CharacterFlyweight {
    const key = fontStyle + fontSize + color;

    if (!this.characters.has(key)) {
      console.log(
        `Creating new character: Font Style ${fontStyle}, Font size ${fontSize}, Color ${color}`
      );
      this.characters.set(
        key,
        new Character(fontStyle, color, fontSize)
      );
    } else {
      console.log(
        `Reusing character: Font Style ${fontStyle}, Font size ${fontSize}, Color ${color}`
      );
    }

    const character = this.characters.get(key);
    if (character) {
      return character;
    }
    throw new Error(
      "Failed to fetch or create a new character"
    );
  }
}
