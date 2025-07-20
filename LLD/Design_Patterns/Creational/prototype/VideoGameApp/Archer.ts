import { Character } from "./Character";

export class Archer implements Character {
  constructor(
    private name: string,
    private health: number,
    private attackPower: number,
    private defense: number
  ) {}

  clone(): Archer {
    return new Archer(
      this.name,
      this.health,
      this.attackPower,
      this.defense
    );
  }

  displayAttributes(): void {
    console.log(`Archer ==>
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
