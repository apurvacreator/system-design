import { PizzaDecorator } from "./PizzaDecorator";

export class OliveDecorator extends PizzaDecorator {
  getDescription(): string {
    return this.decorator.getDescription() + ", Olives";
  }

  getCost(): number {
    return this.decorator.getCost() + 0.5;
  }
}
