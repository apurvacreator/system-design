import { Observer } from "./Observer";

export class InvestorA implements Observer {
  update(symbol: string, newPrice: number): void {
    console.log(
      `InvestorA notified: Stock ${symbol} has a new price ${newPrice}`
    );
  }
}
