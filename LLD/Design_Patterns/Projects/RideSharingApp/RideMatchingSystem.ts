import { FareStrategy } from "./FareStrategy";
import { Location } from "./Location";
import { Ride, RIDE_STATUS } from "./Ride";
import { Driver } from "./Users/Driver";
import { Passenger } from "./Users/Passenger";

export class RideMatchingSystem {
  private availableDrivers: Driver[] = [];

  addDriver(driver: Driver) {
    this.availableDrivers.push(driver);
  }

  requestRide(
    passenger: Passenger,
    distance: number,
    fareStrategy: FareStrategy
  ) {
    if (!this.availableDrivers.length) {
      passenger.notify(
        "No drivers are available currently"
      );
      return;
    }

    const nearestDriver = this.findNearestDriver(
      passenger.getLocation()
    );
    // Remove the driver from the available drivers list
    this.availableDrivers = this.availableDrivers.filter(
      (driver) => driver !== nearestDriver
    );
    const ride = new Ride(
      nearestDriver,
      passenger,
      distance,
      fareStrategy
    );
    ride.calculateFare();

    passenger.notify(
      `Your ride is scheduled! Fare amount: Rs ${ride.getFare()}
       Driver Name: ${nearestDriver.getName()}
       Vehicle number: ${nearestDriver
         .getVehicle()
         .getNumberPlate()}
      `
    );
    nearestDriver.notify(
      `You have a new ride request for amount Rs${ride.getFare()}
      Customer: ${passenger.getName()}
      `
    );

    // update status to ONGOING after sometime
    setTimeout(() => {
      ride.updateStatus(RIDE_STATUS.ONGOING);
    }, 2000);

    // update status to COMPLETED
    setTimeout(() => {
      ride.updateStatus(RIDE_STATUS.COMPLETED);
      this.availableDrivers.push(nearestDriver);
    }, 5000);

    return;
  }

  findNearestDriver(passengerLocation: Location): Driver {
    let minDistance = Number.MAX_VALUE;
    let assignedDriver;

    for (const driver of this.availableDrivers) {
      const distance = driver
        .getLocation()
        .calculateDistance(passengerLocation);
      if (distance < minDistance) {
        minDistance = distance;
        assignedDriver = driver;
      }
    }

    return assignedDriver;
  }
}
