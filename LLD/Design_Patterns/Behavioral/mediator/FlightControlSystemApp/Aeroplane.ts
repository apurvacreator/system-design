import { Mediator } from "./Mediator";

export class Aeroplane {
  constructor(
    private id: string,
    private mediator: Mediator
  ) {}

  requestTakeOff() {
    console.log(`Aeroplane: ${this.id} requesting takeoff`);
    this.mediator.handleTakeOffRequest(this);
  }

  requestLanding() {
    console.log(`Aeroplane: ${this.id} requesting landing`);
    this.mediator.handleLandingRequest(this);
  }

  completeTakeOff() {
    console.log(`Aeroplane: ${this.id} has taken off`);
    this.mediator.notifyTakeOffComplete(this);
  }

  completeLanding() {
    console.log(`Aeroplane: ${this.id} has landed`);
    this.mediator.notifyLandingComplete(this);
  }

  receiveNotification(message: string) {
    console.log(`Aeroplane: ${this.id} - ${message}`);
  }

  getId() {
    return this.id;
  }
}
