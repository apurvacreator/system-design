import { Command } from "./Command";

export class RemoteControl {
  private command: Command;
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}
