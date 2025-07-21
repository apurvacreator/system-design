export class NewWeatherService {
  constructor(
    private temperature: string,
    private condition: string
  ) {}

  fetchData() {
    return JSON.stringify({
      temperature: this.temperature,
      condition: this.condition,
    });
  }
}
