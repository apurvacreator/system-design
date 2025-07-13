import { Observer } from "./Observer";

export class WindowDevice implements Observer {
  update(temp: number): void {
    console.log(
      `Updating window device temperature to ${temp}`
    );
  }
}
