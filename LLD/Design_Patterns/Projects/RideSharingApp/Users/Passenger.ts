import { Location } from "../Location";
import { User } from "./User";

export class Passenger extends User {
  constructor(
    name: string,
    email: string,
    location: Location
  ) {
    super(name, email, location);
  }

  notify(message: string) {
    console.log(`Hi ${this.name}: ${message}`);
  }
}
