import { DataParser } from "./DataParser";

export class CSVParser extends DataParser {
  protected parser(): void {
    console.log("Parsing CSV data");
  }
}
