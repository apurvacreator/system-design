import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  constructor(numberPlate: string) {
    super(numberPlate);
  }

  getFarePerkm() {
    return 20;
  }
}
