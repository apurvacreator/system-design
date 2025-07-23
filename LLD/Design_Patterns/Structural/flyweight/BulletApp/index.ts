import { Bullet } from "./Bullet";
import { BulletTypeFactory } from "./BullteTypeFactory";

const bulletTypeFatory = new BulletTypeFactory();

const bulletType1 = bulletTypeFatory.getBulletType("Red");
const bulletType2 = bulletTypeFatory.getBulletType("Red"); // Reuse bulletType1

console.log(bulletType1);
console.log(bulletType1 === bulletType2);

const bullets: Bullet[] = [
  new Bullet(5, 12, 100, bulletType1),
  new Bullet(10, 20, 150, bulletType2),
  new Bullet(8, 23, 100, bulletType1),
  new Bullet(10, 50, 200, bulletType1),
];

for (const bullet of bullets) {
  console.log(bullet.showBullet());
}
