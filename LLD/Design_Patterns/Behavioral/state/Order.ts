import { OrderState } from "./OrderState";

// Context: Whose behavior changes based on the state
export class Order {
  constructor(private state: OrderState) {}

  setState(order: OrderState) {
    this.state = order;
  }

  getState(): OrderState {
    return this.state;
  }

  next() {
    this.state.next(this);
  }

  cancel() {
    this.state.cancel(this);
  }
}
