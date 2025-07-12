import { Readable } from "./Readable";

export class ReadOnly extends Readable {
  read() {
    console.log("Reading from a read only file");
  }
}
