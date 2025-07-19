import { Aeroplane } from "./Aeroplane";
import { Mediator } from "./Mediator";

export class ControlTower implements Mediator {
  private aeroplanes: Aeroplane[];
  private takeOffRunways: number;
  private landingRunways: number;

  constructor() {
    this.aeroplanes = [];
    this.takeOffRunways = 2;
    this.landingRunways = 2;
  }

  registerAeroplane(aeroplane: Aeroplane): void {
    this.aeroplanes.push(aeroplane);
  }

  handleTakeOffRequest(aeroplane: Aeroplane): void {
    if (this.takeOffRunways > 0) {
      this.takeOffRunways--;
      this.notifyAeroplane(
        aeroplane,
        `Takeoff approved. Runways available: ${this.takeOffRunways}`
      );
    } else {
      this.notifyAeroplane(
        aeroplane,
        `Takeoff denied. No runways available. Please wait`
      );
    }
  }

  handleLandingRequest(aeroplane: Aeroplane): void {
    if (this.landingRunways > 0) {
      this.landingRunways--;
      this.notifyAeroplane(
        aeroplane,
        `Landing approved. Runways available: ${this.landingRunways}`
      );
    } else {
      this.notifyAeroplane(
        aeroplane,
        `Landing denied. No runways available. Please wait`
      );
    }
  }

  notifyTakeOffComplete(aeroplane: Aeroplane): void {
    this.takeOffRunways++;
    console.log(
      `Runway freed. Available takeoff runways: ${this.takeOffRunways}`
    );
  }

  notifyLandingComplete(aeroplane: Aeroplane): void {
    this.landingRunways++;
    console.log(
      `Runway freed. Available landing runways: ${this.landingRunways}`
    );
  }

  notifyAeroplane(aeroplane: Aeroplane, message: string) {
    aeroplane.receiveNotification(message);
  }
}
