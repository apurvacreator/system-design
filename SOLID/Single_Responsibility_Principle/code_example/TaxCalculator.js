class TaxCalculator {
  #employeeTax;

  calculateTax(employeeType) {
    if (employeeType === "fulltime") {
      this.#employeeTax = 30;
    } else if (employeeType === "contract") {
      this.#employeeTax = 20;
    } else {
      this.#employeeTax = null;
    }
    return this.#employeeTax;
  }
}

module.exports = TaxCalculator;
