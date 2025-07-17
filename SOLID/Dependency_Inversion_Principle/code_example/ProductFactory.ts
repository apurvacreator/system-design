import { IProductRepository } from "./IProductRepository";
import { SQLProductRepository } from "./SQLProductRepository";

export class ProductFactory {
  static create(): IProductRepository {
    return new SQLProductRepository();
  }
}
