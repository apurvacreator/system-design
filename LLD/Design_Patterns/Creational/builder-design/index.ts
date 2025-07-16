import { House } from "./House";

const house = new House.Builder(
  "Concrete",
  "Wooden",
  "Tile"
)
  .addGarage()
  //   .addSwimmingPool()
  .addGarden()
  .build();

house.describe();

// Building house with:
//         Foundation: Concrete
//         Floor: Wooden
//         Roof: Tile
//         Garden: Yes
//         Garage: Yes
//         Swimming pool: No
