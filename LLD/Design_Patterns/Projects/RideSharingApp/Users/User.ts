import { Location } from "../Location";

export abstract class User {
  protected name: string;
  protected email: string;
  protected location: Location;

  constructor(
    name: string,
    email: string,
    location: Location
  ) {
    this.name = name;
    this.email = email;
    this.location = location;
  }

  getLocation() {
    return this.location;
  }

  setLocation(location: Location) {
    this.location = location;
  }

  getName() {
    return this.name;
  }

  abstract notify(message: string);
}
