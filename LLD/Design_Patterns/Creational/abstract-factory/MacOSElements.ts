import { Button, Checkbox } from "./Product";

// Concrete product implementation for MacOS
export class MacOSButton implements Button {
  render(): void {
    console.log("Rendering a MacOS button");
  }
}

export class MacOSCheckbox implements Checkbox {
  render(): void {
    console.log("Rendering a MacOS checkbox");
  }
}
