import { PaymentStrategy } from "./PaymentStrategy";

export class PaymentProcessor {
  private strategy: PaymentStrategy;

  setPaymentStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  processPayment(amount: number) {
    this.strategy.pay(amount);
  }
}
