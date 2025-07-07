const InHouseProduct = require("./InHouseProduct");
const Product = require("./Product");

function main() {
  const products = [];
  const p1 = new Product();
  const p2 = new Product();
  const p3 = new InHouseProduct();
  products.push(p1, p2, p3);

  for (const product of products) {
    console.log(
      `Product discount: ${product.getDiscount()}%`
    );
  }
}

main();
