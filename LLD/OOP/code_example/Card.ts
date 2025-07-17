import { PaymentMethod } from "./PaymentMethod";

export abstract class Card implements PaymentMethod {
  // convention in JS for a protected field
  _userName: string;
  _cardNo: string;

  constructor(userName, cardNo) {
    this._userName = userName;
    this._cardNo = cardNo;
  }

  get cardNo() {
    return this._cardNo;
  }

  get userName() {
    return this._userName;
  }

  pay() {}
}
