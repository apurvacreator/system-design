import { LegacyWeatherService } from "./LegacyWeatherService";
import { NewWeatherService } from "./NewWeatherService";
import { NewWeatherServiceAdapter } from "./NewWeatherServiceAdapter";
import { WeatherService } from "./WeatherService";

const legacyService: WeatherService =
  new LegacyWeatherService("32", "Humid");

console.log("Weather data using legacy weather service");
console.log(legacyService.getWeatherData());

const adapterService: WeatherService =
  new NewWeatherServiceAdapter(
    new NewWeatherService("18", "Pleasant")
  );

console.log(
  "Weather data using new weather service adapter"
);
console.log(adapterService.getWeatherData());
