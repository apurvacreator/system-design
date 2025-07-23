// Flyweight: Shared color
export class BulletType {
  constructor(private color: string) {}

  getColor(): string {
    return this.color;
  }
}
