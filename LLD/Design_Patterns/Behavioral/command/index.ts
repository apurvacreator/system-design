import { BoldCommand } from "./BoldCommand";
import { Button } from "./Button";
import { ItalicizedCommand } from "./ItalicizedCommand";
import { TextEditor } from "./TextEditor";

const button = new Button();
const editor = new TextEditor();

const boldCommand = new BoldCommand(editor);
const italicizedCommand = new ItalicizedCommand(editor);

button.click(boldCommand);
button.click(italicizedCommand);

button.undo();
