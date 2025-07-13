import { PaymentStrategy } from "./PaymentStrategy";

export class CreditCard implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} using Credit card`);
  }
}
