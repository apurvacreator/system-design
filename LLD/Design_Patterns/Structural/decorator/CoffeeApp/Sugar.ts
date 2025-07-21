import { CoffeeDecorator } from "./CoffeeDecorator";

export class Sugar extends CoffeeDecorator {
  getDescription(): string {
    return this.decorator.getDescription() + ", Sugar";
  }

  getCost(): number {
    return this.decorator.getCost() + 0.3;
  }
}
