import { Card } from "./Card";

export class CreditCard extends Card {
  constructor(name, cardNo) {
    super(name, cardNo);
  }

  pay() {
    console.log(
      `Paying using Credit card: ${this._cardNo}`
    );
  }
}
