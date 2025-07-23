import { Location } from "../Location";
import { User } from "./User";
import { Vehicle } from "../Vehicles/Vehicle";

export class Driver extends User {
  private vehicle: Vehicle;
  constructor(
    name: string,
    email: string,
    location: Location,
    vehicle: Vehicle
  ) {
    super(name, email, location);
    this.vehicle = vehicle;
  }

  getVehicle() {
    return this.vehicle;
  }

  notify(message: string) {
    console.log(`Dear partner ${this.name}: ${message}`);
  }
}
