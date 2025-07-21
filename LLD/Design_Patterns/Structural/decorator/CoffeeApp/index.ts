import { BasicCoffee } from "./BasicCoffee";
import { Milk } from "./Milk";
import { Sugar } from "./Sugar";
import { WhippedCream } from "./WhippedCream";

let coffee = new BasicCoffee();
coffee = new Sugar(coffee);
coffee = new Milk(coffee);
//coffee = new WhippedCream(coffee);

console.log(`Your Coffee: ${coffee.getDescription()}`);
console.log(`Total cost: $${coffee.getCost()}`);
