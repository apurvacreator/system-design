import { GUIFactory } from "./GUIFactory";
import { Button, Checkbox } from "./Product";

export class Application {
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  renderUI() {
    this.button.render();
    this.checkbox.render();
  }
}
