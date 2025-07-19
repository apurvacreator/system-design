import { GraphicEditor } from "./GraphicEditor";
import { UndoRedoManager } from "./UndoRedoManager";

const editor = new GraphicEditor();
const manager = new UndoRedoManager();

editor.setShape("Circle", "Red", "Large", 10, 15);
manager.save(editor);

console.log(editor.getShape());

editor.setShape("Circle", "Green", "Large", 10, 25);
manager.save(editor);
console.log(editor.getShape());

manager.undo(editor);
console.log(editor.getShape());

manager.redo(editor);
console.log(editor.getShape());
