import { Order } from "./Order";
import { OrderState } from "./OrderState";
import { ProcessingOrderState } from "./ProcessingOrderState";

// Concrete state
export class NewOrderState implements OrderState {
  next(order: Order): void {
    console.log("Moving to Processing");
    order.setState(new ProcessingOrderState());
  }

  cancel(order: Order): void {
    console.log("Order Cancelled from New state");
  }
}
