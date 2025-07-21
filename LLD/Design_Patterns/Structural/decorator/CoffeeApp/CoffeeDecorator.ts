import { Coffee } from "./Coffee";

export class CoffeeDecorator implements Coffee {
  constructor(protected decorator: Coffee) {}
  getDescription(): string {
    return this.decorator.getDescription();
  }

  getCost(): number {
    return this.decorator.getCost();
  }
}
