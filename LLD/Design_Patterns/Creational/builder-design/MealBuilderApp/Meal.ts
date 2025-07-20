import { MealBuilder } from "./MealBuilder";

export class Meal {
  private mainDish: string;
  private sideDish: string;
  private drink: string;
  private dessert: string;
  private appetizer: string;

  private constructor(builder: MealBuilder) {
    this.mainDish = builder.mainDish;
    this.sideDish = builder.sideDish;
    this.drink = builder.drink;
    this.dessert = builder.dessert;
    this.appetizer = builder.appetizer;
  }

  static getInstance(builder: MealBuilder): Meal {
    return new Meal(builder);
  }

  printMealSummary() {
    console.log("Here's your meal summary");
    console.log(`
        Main dish: ${this.mainDish}
        Side dish: ${this.sideDish}
        Drink: ${this.drink}
        Dessert: ${this.dessert}
        Appetizer: ${this.appetizer}
        `);
  }
}
