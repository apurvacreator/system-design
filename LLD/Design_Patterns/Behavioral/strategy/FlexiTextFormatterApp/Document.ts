import { TextFormatter } from "./TextFormatter";

export class Document {
  private content: string;
  private formatter: TextFormatter;

  setContent(content: string) {
    this.content = content;
  }

  setFormatter(formatter: TextFormatter) {
    this.formatter = formatter;
  }

  display() {
    if (this.formatter) {
      return this.formatter.format(this.content);
    }
    throw new Error("No formatter selected");
  }
}
