import { FareStrategy } from "./FareStrategy";
import { Driver } from "./Users/Driver";
import { Passenger } from "./Users/Passenger";

export enum RIDE_STATUS {
  SCHEULED = "SCHEULED",
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED",
}

export class Ride {
  private driver: Driver;
  private passenger: Passenger;
  private distance: number;
  private fareStrategy: FareStrategy;
  private fare: number;
  private status: RIDE_STATUS;

  constructor(
    driver: Driver,
    passenger: Passenger,
    distance: number,
    fareStrategy: FareStrategy
  ) {
    this.driver = driver;
    this.passenger = passenger;
    this.distance = distance;
    this.fareStrategy = fareStrategy;
    this.status = RIDE_STATUS.SCHEULED;
  }

  calculateFare() {
    this.fare = this.fareStrategy.calcFare(
      this.driver.getVehicle(),
      this.distance
    );
  }

  updateStatus(status: RIDE_STATUS) {
    this.status = status;
    this.notifyUsers(status);
  }

  notifyUsers(status: RIDE_STATUS) {
    this.passenger.notify(`Your ride is ${status}`);
    this.driver.notify(`Ride status is ${status}`);
  }

  getFare(): number {
    return this.fare;
  }

  getStatus(): RIDE_STATUS {
    return this.status;
  }
}
