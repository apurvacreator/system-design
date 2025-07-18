import { Image } from "./Image";
import { RealImage } from "./RealImage";

export class ProxyImage implements Image {
  private realImage: RealImage;
  private filename: string;

  constructor(filename) {
    this.filename = filename;
  }

  display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }

    this.realImage.display();
  }
}
