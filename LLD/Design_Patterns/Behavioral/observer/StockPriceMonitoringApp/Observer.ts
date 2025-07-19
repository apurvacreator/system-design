export interface Observer {
  update(symbol: string, newPrice: number): void;
}
