import { EditorMemento } from "./EditorMemento";
import { TextEditor } from "./TextEditor";

export class UndoRedoManager {
  private history: EditorMemento[] = [];
  private future: EditorMemento[] = [];

  save(editor: TextEditor) {
    this.history.push(editor.save());
    this.future = []; // Clear redo stack whenever new input is saved
  }

  undo(editor: TextEditor) {
    if (this.history.length) {
      const current = editor.save();
      this.future.push(current);
      // Remove the latest state (current snapshot)
      this.history.pop();

      // Restore the previous state (the true 'undo' target)
      const memento = this.history[this.history.length - 1];
      if (memento) {
        editor.restore(memento);
      }
    }
  }

  redo(editor: TextEditor) {
    if (this.future.length) {
      const memento = this.future.pop();
      if (memento) {
        this.save(editor);
        editor.restore(memento);
      }
    }
  }
}
