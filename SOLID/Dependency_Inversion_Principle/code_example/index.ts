import { ProductCatalog } from "./ProductCatalog";
import { ProductFactory } from "./ProductFactory";

const productRepository = ProductFactory.create();
const productCatalog = new ProductCatalog(
  productRepository
);

console.log(productCatalog.listAllProducts());
