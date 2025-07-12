import { TextEditor } from "./TextEditor";
import { UndoRedoManager } from "./UndoRedoManager";

const editor = new TextEditor();
const undoRedoManager = new UndoRedoManager();

editor.type("First");
undoRedoManager.save(editor);

editor.type("Second");
undoRedoManager.save(editor);

editor.type("Third");
undoRedoManager.save(editor);

console.log(editor.getContent()); // Third

undoRedoManager.undo(editor);
console.log(editor.getContent()); // Second

undoRedoManager.undo(editor);
console.log(editor.getContent()); // First

undoRedoManager.redo(editor);
console.log(editor.getContent()); // Second
