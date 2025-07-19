import { ReportTemplate } from "./ReportTemplate";

export class InventoryReport extends ReportTemplate {
  protected gatherData(): void {
    console.log("Gathering inventory data");
  }

  protected processData(): void {
    console.log("Processing inventory data");
  }
}
