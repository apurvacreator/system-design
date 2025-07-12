import { PaymentMethod } from "./PaymentMethod";

export class Upi implements PaymentMethod {
  private upiId;

  constructor(upiId) {
    this.upiId = upiId;
  }

  pay() {
    console.log(`Paying using upi id: ${this.upiId}`);
  }
}
