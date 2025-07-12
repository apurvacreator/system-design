import { IProductRepository } from "./IProductRepository";

export class ProductCatalog {
  private productRepository: IProductRepository;
  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }
  listAllProducts() {
    return this.productRepository.getAllProductNames();
  }
}
