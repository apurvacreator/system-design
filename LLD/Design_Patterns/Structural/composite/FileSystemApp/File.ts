import { FileSystem } from "./FileSystem";

export class File implements FileSystem {
  constructor(private name: string) {}

  display(): void {
    console.log(`File: ${this.name}`);
  }
}
