import { Order } from "./Order";

// Order interface
export interface OrderState {
  next(order: Order): void;
  cancel(order: Order): void;
}
