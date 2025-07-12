import { IWritable } from "./IWritable";
import { Readable } from "./Readable";

export class Writable
  extends Readable
  implements IWritable
{
  write() {
    console.log("Writing to file");
  }
}
