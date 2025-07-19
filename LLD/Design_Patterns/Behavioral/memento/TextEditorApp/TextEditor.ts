import { EditorMemento } from "./EditorMemento";

export class TextEditor {
  private content: string;

  type(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento) {
    this.content = memento.getState();
  }
}
