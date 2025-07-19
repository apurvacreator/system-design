export abstract class ReportTemplate {
  // Template method
  // Don't override
  generateReport() {
    this.gatherData();
    this.processData();
    this.formatData();
    this.printReport();
  }

  protected abstract gatherData(): void;

  protected abstract processData(): void;

  private formatData() {
    console.log(
      "Formatting the report with the appropriate layout and style"
    );
  }

  private printReport() {
    console.log(
      "Printing the report for final review and submission"
    );
  }
}
