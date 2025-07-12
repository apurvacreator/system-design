import { IReadable } from "./IReadable";

export class Readable implements IReadable {
  read() {
    console.log("Reading from file!");
  }
}
