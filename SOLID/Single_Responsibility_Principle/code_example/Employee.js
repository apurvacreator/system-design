const EmployeeRepository = require("./EmployeeRepository");
const TaxCalculator = require("./TaxCalculator");

class Employee {
  #employeeId;
  #employeeName;
  #employeeAdress;
  #contactNumber;
  #employeeType;

  save(employeeRepository) {
    // const employeeRepository = new EmployeeRepository();
    const employee = {
      employeeId: this.employeeId,
      employeeName: this.employeeName,
      employeeAdress: this.employeeAdress,
      contactNumber: this.contactNumber,
      employeeType: this.employeeType,
    };
    return employeeRepository.save(employee);
  }

  calculateTax(taxCalculator) {
    // const taxCalculator = new TaxCalculator();
    return taxCalculator.calculateTax(this.#employeeType);
  }

  set employeeId(value) {
    if (!value || value === "") return null;
    this.#employeeId = value;
  }

  get employeeId() {
    return this.#employeeId;
  }

  set employeeName(value) {
    if (!value || value === "") return null;
    this.#employeeName = value;
  }

  get employeeName() {
    return this.#employeeName;
  }

  set employeeAdress(value) {
    if (!value || value === "") return null;
    this.#employeeAdress = value;
  }

  get employeeAdress() {
    return this.#employeeAdress;
  }

  set contactNumber(value) {
    if (!value || value === "") return null;
    this.#contactNumber = value;
  }

  get contactNumber() {
    return this.#contactNumber;
  }

  set employeeType(value) {
    if (
      !value ||
      value === "" ||
      (value !== "fulltime" && value !== "contract")
    ) {
      return null;
    }
    this.#employeeType = value;
  }

  get employeeType() {
    return this.#employeeType;
  }
}

const employee = new Employee();
employee.employeeId = "123";
employee.employeeName = "Max Biaggi";
employee.contactNumber = "+91 6768992123";
employee.employeeAdress = "5A 1st street, Menlo Park";
employee.employeeType = "fulltime";

const employeeRepository = new EmployeeRepository();
employee.save(employeeRepository);

const taxCalculator = new TaxCalculator();
const tax = employee.calculateTax(taxCalculator);

if (tax) {
  console.log(
    `Employee => ID: ${employee.employeeId}, Name: ${employee.employeeName}, is a ${employee.employeeType} employee and will bear a ${tax}% tax`
  );
}
