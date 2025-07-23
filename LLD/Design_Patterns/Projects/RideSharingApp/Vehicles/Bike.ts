import { Vehicle } from "./Vehicle";

export class Bike extends Vehicle {
  constructor(numberPlate: string) {
    super(numberPlate);
  }

  getFarePerkm() {
    return 10;
  }
}
