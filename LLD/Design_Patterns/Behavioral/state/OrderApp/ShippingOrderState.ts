import { Order } from "./Order";
import { OrderState } from "./OrderState";

// Concrete state
export class ShippingOrderState implements OrderState {
  next(order: Order): void {
    console.log("Order Shipped, no next state");
  }

  cancel(order: Order): void {
    console.log("Cannot cancel order");
  }
}
