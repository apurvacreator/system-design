import { Document } from "./Document";
import { HTMLDocument } from "./HTMLDocument";
import { PDFDocument } from "./PDFDocument";
import { WordDocument } from "./WordDocument";

export class DocumentFactory {
  static createDocument(type: string): Document {
    switch (type.toLowerCase()) {
      case "html":
        return new HTMLDocument();
      case "pdf":
        return new PDFDocument();
      case "word":
        return new WordDocument();
      default:
        throw new Error(
          `Unsupported document type ${type}`
        );
    }
  }
}
