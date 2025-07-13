import { Observer } from "./Observer";

export interface Subject {
  registerObserver(obs: Observer): void;
  removeObserver(obs: Observer): void;
  notifyObservers(): void;
}
