export abstract class Vehicle {
  constructor(protected numberPlate: string) {}

  getNumberPlate() {
    return this.numberPlate;
  }

  abstract getFarePerkm();
}
