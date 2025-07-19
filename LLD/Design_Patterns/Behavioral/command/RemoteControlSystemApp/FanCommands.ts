import { Command } from "./Command";
import { Fan } from "./Fan";

export class FanCommands {
  static FanOnCommand = class FanOnCommand
    implements Command
  {
    constructor(private fan: Fan) {}
    execute(): void {
      this.fan.turnOn();
    }
  };

  static FanOffCommand = class FanOffCommand
    implements Command
  {
    constructor(private fan: Fan) {}
    execute(): void {
      this.fan.turnOff();
    }
  };
}
