import { EmployeeReport } from "./EmployeeReport";
import { InventoryReport } from "./InventoryReport";
import { SalesReport } from "./SalesReport";

const salesReport = new SalesReport();
const employeeReport = new EmployeeReport();
const inventoryReport = new InventoryReport();

console.log("Generating Sales Report");
salesReport.generateReport();
console.log(`\n`);
console.log("Generating Employee Report");
employeeReport.generateReport();
console.log(`\n`);
console.log("Generating Inventory Report");
inventoryReport.generateReport();
