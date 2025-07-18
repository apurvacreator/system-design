import { Image } from "./Image";

export class RealImage implements Image {
  private filename: string;
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }

  loadFromDisk() {
    console.log(`Loading ${this.filename} from disk`);
  }

  display(): void {
    console.log(`Displaying ${this.filename}`);
  }
}
