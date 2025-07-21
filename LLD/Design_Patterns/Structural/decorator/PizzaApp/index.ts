import { BasicPizza } from "./BasicPizza";
import { CheeseDecorator } from "./CheeseDecorator";
import { OliveDecorator } from "./OliveDecorator";

let pizza = new BasicPizza();
pizza = new CheeseDecorator(pizza);
pizza = new OliveDecorator(pizza);

console.log(`Your Pizza: ${pizza.getDescription()}`);
console.log(`Total cost: $${pizza.getCost()}`);
