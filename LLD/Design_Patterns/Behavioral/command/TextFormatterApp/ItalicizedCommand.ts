import { Command } from "./Command";
import { TextEditor } from "./TextEditor";

// Concrete Command
export class ItalicizedCommand implements Command {
  constructor(private editor: TextEditor) {}

  execute(): void {
    this.editor.setItalicizedText();
  }

  undo(): void {
    this.editor.undoFormatting();
  }
}
