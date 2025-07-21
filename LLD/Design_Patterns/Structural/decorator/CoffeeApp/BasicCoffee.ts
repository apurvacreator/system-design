import { Coffee } from "./Coffee";

export class BasicCoffee implements Coffee {
  getDescription(): string {
    return "Basic Coffee";
  }

  getCost(): number {
    return 3.0;
  }
}
