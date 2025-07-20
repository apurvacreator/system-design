import * as fs from "fs";

export class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  info(message: string) {
    this.log("INFO", message);
  }

  warn(message: string) {
    this.log("WARN", message);
  }

  error(message: string) {
    this.log("ERROR", message);
  }

  log(level: string, message: string) {
    const timestamp = new Date().toISOString();
    const loggerMessage = `${timestamp} [${level}]: ${message}\n`;
    this.saveTofile(loggerMessage);
    console.log(loggerMessage);
  }

  saveTofile(message: string) {
    fs.appendFile("./logs.txt", message, (err) => {
      if (err) throw err;
      console.log(
        `Log ${message} saved in file sucessfully`
      );
    });
  }
}
