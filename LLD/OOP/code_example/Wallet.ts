import { PaymentMethod } from "./PaymentMethod";

export class Wallet implements PaymentMethod {
  pay() {
    console.log(`Paying using wallet`);
  }
}
