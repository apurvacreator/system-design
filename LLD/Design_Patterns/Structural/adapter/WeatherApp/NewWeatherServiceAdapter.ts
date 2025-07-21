import { NewWeatherService } from "./NewWeatherService";
import { WeatherService } from "./WeatherService";

export class NewWeatherServiceAdapter
  implements WeatherService
{
  constructor(
    private newWeatherService: NewWeatherService
  ) {}

  getWeatherData(): string {
    return this.newWeatherService.fetchData();
  }
}
