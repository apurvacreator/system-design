import { Observer } from "./Observer";

export class MobileDevice implements Observer {
  update(temp: number): void {
    console.log(
      `Updating mobile device temperature to ${temp}`
    );
  }
}
