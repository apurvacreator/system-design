import { Document } from "./Document";
import { HTMLFormatter } from "./HTMLFormatter";
import { MarkdownFormatter } from "./MarkdownFormatter";
import { PlainTextFormatter } from "./PlainTextFormatter";

const document = new Document();
document.setContent("Hello World!");

// document.display(); This will throw error: No formatter selected
const plainTextFormatter = new PlainTextFormatter();
const htmlFormatter = new HTMLFormatter();
const markdownFormatter = new MarkdownFormatter();

document.setFormatter(plainTextFormatter);
console.log(document.display());

document.setFormatter(htmlFormatter);
console.log(document.display());

document.setFormatter(markdownFormatter);
console.log(document.display());
