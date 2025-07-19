export abstract class DataParser {
  // Template method
  // Don't override
  parse() {
    this.openFile();
    // Concrete subclass overridea the parser method with specific implementation
    this.parser();
    this.closeFile();
  }

  private openFile() {
    console.log("Opening file");
  }

  private closeFile() {
    console.log("Closing file");
  }

  protected abstract parser(): void;
}
