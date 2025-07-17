import { Pizza } from "./Pizza";

export class PizzaDecorator implements Pizza {
  protected decorator: Pizza;
  constructor(pizza) {
    this.decorator = pizza;
  }

  getDescription(): string {
    return this.decorator.getDescription();
  }

  getCost(): number {
    return this.decorator.getCost();
  }
}
