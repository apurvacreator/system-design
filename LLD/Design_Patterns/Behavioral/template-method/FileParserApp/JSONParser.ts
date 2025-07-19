import { DataParser } from "./DataParser";

export class JSONParser extends DataParser {
  protected parser(): void {
    console.log("Parsing JSON data");
  }
}
