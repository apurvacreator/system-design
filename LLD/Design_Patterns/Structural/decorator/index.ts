import { BasicPizza } from "./BasicPizza";
import { CheeseDecorator } from "./CheeseDecorator";
import { OliveDecorator } from "./OliveDecorator";

let pizza = new BasicPizza();
pizza = new CheeseDecorator(pizza);
pizza = new OliveDecorator(pizza);

console.log(pizza.getDescription());
console.log(pizza.getCost());
