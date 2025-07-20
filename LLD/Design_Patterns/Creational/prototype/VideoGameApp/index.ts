import { Warrior } from "./Warrior";

const warrior1 = new Warrior("Mikoshi", 100, 85, 70);

const warrior2 = warrior1.clone();
warrior2.setName("Maya");
warrior2.setAttackPower(92);
warrior2.setDefense(80);

console.log("Original character");
warrior1.displayAttributes();

console.log("Cloned character");
warrior2.displayAttributes();

// Same can be tested for other charaters -  Archer and Mage
