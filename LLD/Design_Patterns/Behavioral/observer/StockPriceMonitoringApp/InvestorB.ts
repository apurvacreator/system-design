import { Observer } from "./Observer";

export class InvestorB implements Observer {
  update(symbol: string, newPrice: number): void {
    console.log(
      `InvestorB notified: Stock ${symbol} has a new price ${newPrice}`
    );
  }
}
