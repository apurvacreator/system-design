import { IReadable } from "./IReadable";
import { ReadOnly } from "./ReadOnly";
import { Writable } from "./Writable";

// Implement Readonly and Writable file system
const file1 = new ReadOnly();

const file2 = new Writable();

// file1.read();
// file2.read();
file2.write();

readContentFromFile(file1);
readContentFromFile(file2);

function readContentFromFile(file: IReadable) {
  file.read();
}
