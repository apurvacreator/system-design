import { TextFormatter } from "./TextFormatter";

// Concrete strategies
export class MarkdownFormatter implements TextFormatter {
  format(content: string): string {
    return `**${content}**`;
  }
}
