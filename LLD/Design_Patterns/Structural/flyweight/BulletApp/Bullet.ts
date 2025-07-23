import { BulletType } from "./BulletType";

export class Bullet {
  constructor(
    private x: number,
    private y: number,
    private velocity: number,
    private bulletType: BulletType
  ) {}

  showBullet() {
    console.log(
      `Bullet of type ${this.bulletType.getColor()} is at pos ${
        this.x
      }:${this.y} flying at a velocity of ${this.velocity}`
    );
  }
}
