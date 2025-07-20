import { GUIFactory } from "./GUIFactory";
import { Button, Checkbox } from "./Product";
import {
  WindowsButton,
  WindowsCheckbox,
} from "./WindowsElements";

// Concrete Fatory
export class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}
