import { TextFormatter } from "./TextFormatter";

// Concrete strategies
export class PlainTextFormatter implements TextFormatter {
  format(content: string): string {
    return content;
  }
}
