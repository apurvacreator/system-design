import { Command } from "./Command";
import { Light } from "./Light";

export class LightCommands {
  static LightOnCommand = class LightOnCommand
    implements Command
  {
    constructor(private light: Light) {}
    execute(): void {
      this.light.turnOn();
    }
  };

  static LightOffCommand = class LightOffCommand
    implements Command
  {
    constructor(private light: Light) {}
    execute(): void {
      this.light.turnOff();
    }
  };
}
