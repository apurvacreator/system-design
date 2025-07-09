class Employee {
  #employeeId;
  #employeeName;
  #employeeAdress;
  #contactNumber;
  #employeeType;
  #employeeRepository;
  #taxCalculator;

  constructor(employeeRepository, taxCalculator) {
    this.#employeeRepository = employeeRepository;
    this.#taxCalculator = taxCalculator;
  }

  save() {
    const employee = {
      employeeId: this.employeeId,
      employeeName: this.employeeName,
      employeeAdress: this.employeeAdress,
      contactNumber: this.contactNumber,
      employeeType: this.employeeType,
    };
    return this.#employeeRepository.save(employee);
  }

  calculateTax() {
    return this.#taxCalculator.calculateTax(
      this.#employeeType
    );
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

module.exports = Employee;
