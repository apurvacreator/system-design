import { Button, Checkbox } from "./Product";

// Abstract factory interface
export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
