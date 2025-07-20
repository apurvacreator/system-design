import { IHouseBuilder } from "./IHouseBuilder";

export class House {
  private foundation: string;
  private floor: string;
  private roof: string;
  private hasGarden: boolean = false;
  private hasSwimmingPool: boolean = false;
  private hasGarage: boolean = false;

  private constructor(foundation, floor, roof) {
    this.foundation = foundation;
    this.floor = floor;
    this.roof = roof;
  }

  describe() {
    console.log(`Building house with: 
        Foundation: ${this.foundation}
        Floor: ${this.floor}
        Roof: ${this.roof}
        Garden: ${this.hasGarden ? "Yes" : "No"}
        Garage: ${this.hasGarage ? "Yes" : "No"}
        Swimming pool: ${
          this.hasSwimmingPool ? "Yes" : "No"
        }`);
  }

  static Builder = class implements IHouseBuilder {
    private house: House;

    constructor(foundation, floor, roof) {
      this.house = new House(foundation, floor, roof);
    }

    addGarden(): this {
      this.house.hasGarden = true;
      return this;
    }

    addGarage(): this {
      this.house.hasGarage = true;
      return this;
    }

    addSwimmingPool(): this {
      this.house.hasSwimmingPool = true;
      return this;
    }

    build(): House {
      return this.house;
    }
  };
}
