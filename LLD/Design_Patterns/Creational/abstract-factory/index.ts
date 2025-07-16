import { Application } from "./Application";
//import { MacOSFactory } from "./MacOSFactory";
import { WindowsFactory } from "./WindowsFactory";

// const app = new Application(new MacOSFactory());
const app = new Application(new WindowsFactory());

app.renderUI(); // Calls render method of Windows button and checkbox
