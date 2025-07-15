export class AppSettings {
  private static instance: AppSettings;
  private apiKey = "ABI&223298BBIBi";

  // Prevents instantiation
  private constructor() {}

  static getInstace(): AppSettings {
    if (!AppSettings.instance) {
      AppSettings.instance = new AppSettings();
    }
    return AppSettings.instance;
  }

  getApiKey() {
    return this.apiKey;
  }
}
