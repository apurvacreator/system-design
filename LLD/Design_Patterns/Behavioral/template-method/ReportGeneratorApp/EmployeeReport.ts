import { ReportTemplate } from "./ReportTemplate";

export class EmployeeReport extends ReportTemplate {
  protected gatherData(): void {
    console.log("Gathering employee data");
  }

  protected processData(): void {
    console.log("Processing employee data");
  }
}
