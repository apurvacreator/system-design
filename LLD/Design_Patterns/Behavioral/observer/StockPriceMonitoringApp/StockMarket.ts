import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class StockMarket implements Subject {
  private investors: Observer[];
  private priceChangeThreshold: number;

  constructor(priceChangeThreshold) {
    this.investors = [];
    this.priceChangeThreshold = priceChangeThreshold;
  }

  registerInvestor(investor: Observer): void {
    this.investors.push(investor);
  }

  removeInvestor(investor: Observer): void {
    this.investors = this.investors.filter(
      (i) => i !== investor
    );
  }

  notifyInvestors(symbol: string, newPrice: number): void {
    for (const investor of this.investors) {
      investor.update(symbol, newPrice);
    }
  }

  setStockPrice(
    symbol: string,
    newPrice: number,
    oldPrice: number
  ) {
    const priceChange =
      (Math.abs(newPrice - oldPrice) / oldPrice) * 100;
    if (priceChange >= this.priceChangeThreshold) {
      this.notifyInvestors(symbol, newPrice);
    }
  }
}
