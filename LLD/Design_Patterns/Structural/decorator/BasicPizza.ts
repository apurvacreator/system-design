import { Pizza } from "./Pizza";

export class BasicPizza implements Pizza {
  getDescription(): string {
    return "Basic pizza";
  }

  getCost(): number {
    return 3.0;
  }
}
