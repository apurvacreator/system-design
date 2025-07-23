export class Location {
  private latitude: number;
  private longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getLatitude() {
    return this.latitude;
  }

  getLongitude() {
    return this.longitude;
  }

  calculateDistance(location: Location) {
    const dx = this.latitude - location.getLatitude();
    const dy = this.longitude - location.getLongitude();

    return Math.sqrt(dx * dx + dy * dy);
  }
}
