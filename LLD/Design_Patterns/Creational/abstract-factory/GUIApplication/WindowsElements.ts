import { Button, Checkbox } from "./Product";

// Concrete product implementation for Windows
export class WindowsButton implements Button {
  render(): void {
    console.log("Rendering a Windows button");
  }
}

export class WindowsCheckbox implements Checkbox {
  render(): void {
    console.log("Rendering a Windows checkbox");
  }
}
