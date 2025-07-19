import { TextFormatter } from "./TextFormatter";

// Concrete strategies
export class HTMLFormatter implements TextFormatter {
  format(content: string): string {
    return `
    <html>
      <body>${content}</body>
    </html>
    `;
  }
}
