import { Vehicle } from "./Vehicles/Vehicle";

export interface FareStrategy {
  calcFare(vehicle: Vehicle, distance: number): number;
}

export class StandardFare implements FareStrategy {
  calcFare(vehicle: Vehicle, distance: number): number {
    return vehicle.getFarePerkm() * distance;
  }
}

export class SharedFare implements FareStrategy {
  calcFare(vehicle: Vehicle, distance: number): number {
    return vehicle.getFarePerkm() * distance * 0.5;
  }
}

export class LuxuryFare implements FareStrategy {
  calcFare(vehicle: Vehicle, distance: number): number {
    return vehicle.getFarePerkm() * distance * 1.5;
  }
}
