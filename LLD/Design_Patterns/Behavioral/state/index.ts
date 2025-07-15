import { NewOrderState } from "./NewOrderState";
import { Order } from "./Order";
import { ProcessingOrderState } from "./ProcessingOrderState";

const order = new Order(new NewOrderState());
console.log(order.getState());

order.next();
console.log(order.getState());

order.cancel();

order.setState(new ProcessingOrderState());
console.log(order.getState());

order.next();
console.log(order.getState());

// More example => Navigation, State => Mode of Transportation. Context => Direction service
