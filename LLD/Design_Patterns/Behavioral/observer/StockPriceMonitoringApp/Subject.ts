import { Observer } from "./Observer";

export interface Subject {
  registerInvestor(inv: Observer): void;
  removeInvestor(inv: Observer): void;
  notifyInvestors(symbol: string, newPrice: number): void;
}
