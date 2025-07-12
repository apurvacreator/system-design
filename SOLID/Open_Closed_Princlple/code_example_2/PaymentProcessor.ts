import { PaymentMethod } from "./PaymentMethod";

export class PaymentProcessor {
  sendPayment(
    paymentMethod: PaymentMethod,
    amount: number
  ) {
    paymentMethod.pay(amount);
  }
}
