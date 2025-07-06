class EmployeeRepository {
  #employeeList = [];

  save(employee) {
    // The method where DB connection can be handled and employee object can be saved
    console.log(
      `Saving employee to database ===>`,
      employee
    );
    this.#employeeList.push(employee);
    return true;
  }
}

module.exports = EmployeeRepository;
