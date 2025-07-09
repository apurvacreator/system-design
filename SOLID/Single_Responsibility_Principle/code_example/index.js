const Employee = require("./Employee");
const EmployeeRepository = require("./EmployeeRepository");
const TaxCalculator = require("./TaxCalculator");

const employeeRepository = new EmployeeRepository();
const taxCalculator = new TaxCalculator();

// Dependency Injection
const employee = new Employee(
  employeeRepository,
  taxCalculator
);
employee.employeeId = "123";
employee.employeeName = "Max Biaggi";
employee.contactNumber = "+91 6768992123";
employee.employeeAdress = "5A 1st street, Menlo Park";
employee.employeeType = "fulltime";

employee.save();
const tax = employee.calculateTax();

if (tax) {
  console.log(
    `Employee => ID: ${employee.employeeId}, Name: ${employee.employeeName}, is a ${employee.employeeType} employee and will bear a ${tax}% tax`
  );
}
