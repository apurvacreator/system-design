import { Fan } from "./Fan";
import { FanCommands } from "./FanCommands";
import { Light } from "./Light";
import { LightCommands } from "./LightCommands";
import { RemoteControl } from "./RemoteControl";

// Receivers
const light = new Light();
const fan = new Fan();

// Light commands
const lightOnCommand = new LightCommands.LightOnCommand(
  light
);
const lightOffCommand = new LightCommands.LightOffCommand(
  light
);

// Fan commands
const fanOnCommand = new FanCommands.FanOnCommand(fan);
const fanOffCommand = new FanCommands.FanOffCommand(fan);

// Invoker
const remoteControl = new RemoteControl();

remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton();

remoteControl.setCommand(lightOffCommand);
remoteControl.pressButton();

remoteControl.setCommand(fanOnCommand);
remoteControl.pressButton();

remoteControl.setCommand(fanOffCommand);
remoteControl.pressButton();
