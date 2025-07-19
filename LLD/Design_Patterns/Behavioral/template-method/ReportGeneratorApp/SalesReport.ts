import { ReportTemplate } from "./ReportTemplate";

export class SalesReport extends ReportTemplate {
  protected gatherData(): void {
    console.log("Gathering sales data");
  }

  protected processData(): void {
    console.log("Processing sales data");
  }
}
