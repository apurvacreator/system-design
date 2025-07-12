import { PaymentMethod } from "./PaymentMethod";

export class CreditCard implements PaymentMethod {
  private cardNo: string;
  constructor(cardNo) {
    this.cardNo = cardNo;
  }
  pay(amount: number) {
    console.log(
      `Paying ${amount} using credit card: ${this.cardNo}`
    );
  }
}
