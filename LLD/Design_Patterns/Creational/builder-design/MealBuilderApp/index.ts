import { MealBuilder } from "./MealBuilder";

// Full Dish
const fullMeal = new MealBuilder(
  "Chicken Biryani",
  "Prawn fry",
  "Mojito"
)
  .setAppetizer("Tomato Soup")
  .setDessert("Tiramisu")
  .build();

fullMeal.printMealSummary();

// Simple Dish
const simpleMeal = new MealBuilder(
  "Red Sauce pasta",
  "French fries",
  "Diet coke"
).build();

simpleMeal.printMealSummary();
