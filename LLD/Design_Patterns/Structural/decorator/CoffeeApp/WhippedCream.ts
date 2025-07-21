import { CoffeeDecorator } from "./CoffeeDecorator";

export class WhippedCream extends CoffeeDecorator {
  getDescription(): string {
    return (
      this.decorator.getDescription() + ", Whipped cream"
    );
  }

  getCost(): number {
    return this.decorator.getCost() + 0.75;
  }
}
