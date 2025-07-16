import { GUIFactory } from "./GUIFactory";
import {
  MacOSButton,
  MacOSCheckbox,
} from "./MacOSElements";
import { Button, Checkbox } from "./Product";

// Concrete Fatory
export class MacOSFactory implements GUIFactory {
  createButton(): Button {
    return new MacOSButton();
  }

  createCheckbox(): Checkbox {
    return new MacOSCheckbox();
  }
}
