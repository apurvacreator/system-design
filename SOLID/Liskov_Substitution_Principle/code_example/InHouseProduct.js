const Product = require("./Product");

class InHouseProduct extends Product {
  getDiscount() {
    this.applyDiscount();
    return this.discount;
  }

  applyDiscount() {
    this.discount = this.discount * 1.5;
  }
}

module.exports = InHouseProduct;
