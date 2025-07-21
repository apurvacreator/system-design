import { WeatherService } from "./WeatherService";

export class LegacyWeatherService
  implements WeatherService
{
  constructor(
    private temperature: string,
    private condition: string
  ) {}

  getWeatherData(): string {
    return `
        <weather>
            <temperature>${this.temperature}</temperature>
            <condition>${this.condition}</condition>
        </weather>
        `;
  }
}
