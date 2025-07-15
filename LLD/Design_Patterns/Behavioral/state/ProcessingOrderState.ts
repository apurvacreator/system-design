import { Order } from "./Order";
import { OrderState } from "./OrderState";
import { ShippingOrderState } from "./ShippingOrderState";

// Concrete state
export class ProcessingOrderState implements OrderState {
  next(order: Order): void {
    console.log("Moving to Shipping");
    order.setState(new ShippingOrderState());
  }

  cancel(order: Order): void {
    console.log("Order Cancelled from Processing state");
  }
}
