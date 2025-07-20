import { DocumentFactory } from "./DocumentFactory";

try {
  const htmlDocument =
    DocumentFactory.createDocument("HTML");
  htmlDocument.displayType();

  const pdfDocument = DocumentFactory.createDocument("Pdf");
  pdfDocument.displayType();

  const wordDocument =
    DocumentFactory.createDocument("worD");
  wordDocument.displayType();

  // unsupported
  const markdownDocument =
    DocumentFactory.createDocument("markdown");
  markdownDocument.displayType();
} catch (error) {
  console.log(error.message);
}
