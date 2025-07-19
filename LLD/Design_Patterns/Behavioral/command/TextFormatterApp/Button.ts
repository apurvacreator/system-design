import { Command } from "./Command";

// Invoker
export class Button {
  private history: Command[] = [];
  click(command: Command) {
    command.execute();
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}
