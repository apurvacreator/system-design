import { Character } from "./Character";

export class Mage implements Character {
  constructor(
    private name: string,
    private health: number,
    private attackPower: number,
    private defense: number
  ) {}

  clone(): Mage {
    return new Mage(
      this.name,
      this.health,
      this.attackPower,
      this.defense
    );
  }

  displayAttributes(): void {
    console.log(`Mage ==>
      Name: ${this.name}
      Health: ${this.health}
      Attack power: ${this.attackPower}
      Defense: ${this.defense}
      `);
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getHealth() {
    return this.health;
  }

  setHealth(health: number) {
    this.health = health;
  }

  getAttackPower() {
    return this.attackPower;
  }

  setAttackPower(attackPower: number) {
    this.attackPower = attackPower;
  }

  getDefense() {
    return this.defense;
  }

  setDefense(defense: number) {
    this.defense = defense;
  }
}
