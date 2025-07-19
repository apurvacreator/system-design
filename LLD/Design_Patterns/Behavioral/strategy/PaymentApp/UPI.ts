import { PaymentStrategy } from "./PaymentStrategy";

export class UPI implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} using UPI`);
  }
}
