import { EditorMemento } from "./EditorMemento";
import { GraphicEditor } from "./GraphicEditor";

export class UndoRedoManager {
  private history: EditorMemento[] = [];
  private future: EditorMemento[] = [];

  save(editor: GraphicEditor) {
    this.history.push(editor.save());
    this.future = []; // Clear redo stack whenever new input is saved
  }

  undo(editor: GraphicEditor) {
    if (this.history.length) {
      const current = this.history.pop();
      this.future.push(current);

      const memento = this.history[this.history.length - 1];
      if (memento) {
        editor.restore(memento);
      }
    }
  }

  redo(editor: GraphicEditor) {
    if (this.future.length) {
      const memento = this.future.pop();
      if (memento) {
        this.save(editor);
        editor.restore(memento);
      }
    }
  }
}
