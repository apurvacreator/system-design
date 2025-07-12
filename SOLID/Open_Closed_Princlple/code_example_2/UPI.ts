import { PaymentMethod } from "./PaymentMethod";

export class UPI implements PaymentMethod {
  #upiId: string;
  constructor(upiId) {
    this.#upiId = upiId;
  }

  pay(amount: number) {
    console.log(
      `Paying ${amount} using UPI ${this.#upiId}`
    );
  }
}
