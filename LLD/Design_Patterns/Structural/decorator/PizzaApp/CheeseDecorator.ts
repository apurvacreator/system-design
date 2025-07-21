import { PizzaDecorator } from "./PizzaDecorator";

export class CheeseDecorator extends PizzaDecorator {
  getDescription(): string {
    return this.decorator.getDescription() + ", Cheese";
  }

  getCost(): number {
    return this.decorator.getCost() + 1;
  }
}
