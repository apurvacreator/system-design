import { CoffeeDecorator } from "./CoffeeDecorator";

export class Milk extends CoffeeDecorator {
  getDescription(): string {
    return this.decorator.getDescription() + ", Milk";
  }

  getCost(): number {
    return this.decorator.getCost() + 0.5;
  }
}
