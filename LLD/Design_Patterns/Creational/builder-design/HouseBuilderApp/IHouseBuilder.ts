import { House } from "./House";

export interface IHouseBuilder {
  addGarden(): this;
  addGarage(): this;
  addSwimmingPool(): this;
  build(): House;
}
