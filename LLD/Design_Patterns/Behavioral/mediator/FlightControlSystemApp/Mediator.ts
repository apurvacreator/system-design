import { Aeroplane } from "./Aeroplane";

export interface Mediator {
  registerAeroplane(aeroplane: Aeroplane): void;
  handleTakeOffRequest(aeroplane: Aeroplane): void;
  handleLandingRequest(aeroplane: Aeroplane): void;
  notifyTakeOffComplete(aeroplane: Aeroplane): void;
  notifyLandingComplete(aeroplane: Aeroplane): void;
}
