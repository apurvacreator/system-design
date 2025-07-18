import { BulletType } from "./BulletType";

// Flyweight Factory
export class BulletTypeFactory {
  private types: Map<string, BulletType> = new Map();

  getBulletType(color: string) {
    if (!this.types.has(color)) {
      this.types.set(color, new BulletType(color));
    }
    return this.types.get(color);
  }
}
