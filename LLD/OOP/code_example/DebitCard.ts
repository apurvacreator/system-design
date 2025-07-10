import { Card } from "./Card";

export class DebitCard extends Card {
    constructor(name, cardNo) {
        super(name, cardNo)
    }

    pay() {
        console.log(`Paying using Debit card: ${this._cardNo}`);
    }
}