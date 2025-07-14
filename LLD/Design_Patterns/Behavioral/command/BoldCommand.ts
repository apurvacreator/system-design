import { Command } from "./Command";
import { TextEditor } from "./TextEditor";

// Concrete Command
export class BoldCommand implements Command {
  constructor(private editor: TextEditor) {}

  execute(): void {
    this.editor.setBoldText();
  }

  undo(): void {
    this.editor.undoFormatting();
  }
}
