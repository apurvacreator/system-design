import { SharedFare, StandardFare } from "./FareStrategy";
import { Location } from "./Location";
import { RideMatchingSystem } from "./RideMatchingSystem";
import { Driver } from "./Users/Driver";
import { Passenger } from "./Users/Passenger";
import { Car } from "./Vehicles/Car";

const loc1 = new Location(12.975, 77.603);
const loc2 = new Location(12.97, 77.58);
const loc3 = new Location(12.9665, 77.5955);

const car1 = new Car("KA017890");
const car2 = new Car("KA519812");

const passenger1 = new Passenger(
  "Bob",
  "bob@gmail.com",
  loc1
);

const passenger2 = new Passenger(
  "Maya",
  "maya@gmail.com",
  loc1
);

const driver1 = new Driver(
  "Alex",
  "alex@gmail.com",
  loc2,
  car1
);

const driver2 = new Driver(
  "Prakash",
  "prakash@gmail.com",
  loc3,
  car2
);

const rideMatchingSystem = new RideMatchingSystem();

// Expected output: No drivers are available
rideMatchingSystem.requestRide(
  passenger1,
  10,
  new StandardFare()
);

rideMatchingSystem.addDriver(driver1);
rideMatchingSystem.addDriver(driver2);

rideMatchingSystem.requestRide(
  passenger1,
  10,
  new StandardFare()
);

rideMatchingSystem.requestRide(
  passenger2,
  15,
  new SharedFare()
);
