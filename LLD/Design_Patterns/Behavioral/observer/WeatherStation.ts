import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class WeatherStation implements Subject {
  private temp: number;
  private observers: Observer[] = [];

  registerObserver(obs: Observer): void {
    this.observers.push(obs);
  }

  removeObserver(obs: Observer): void {
    this.observers = this.observers.filter(
      (observer) => obs !== observer
    );
  }

  notifyObservers(): void {
    for (const obs of this.observers) {
      obs.update(this.temp);
    }
  }

  setTemperature(temp: number) {
    this.temp = temp;
    this.notifyObservers();
  }
}
