import { Meal } from "./Meal";

export class MealBuilder {
  mainDish: string;
  sideDish: string;
  drink: string;
  dessert: string = "Default Dessert";
  appetizer: string = "Defualt Appetizer";

  constructor(
    mainDish: string,
    sideDish: string,
    drink: string
  ) {
    this.mainDish = mainDish;
    this.sideDish = sideDish;
    this.drink = drink;
  }

  setDessert(dessert: string): MealBuilder {
    this.dessert = dessert;
    return this;
  }

  setAppetizer(appetizer: string): MealBuilder {
    this.appetizer = appetizer;
    return this;
  }

  build(): Meal {
    return Meal.getInstance(this);
  }
}
