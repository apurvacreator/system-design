import { MenuItem } from "./MenuItem";
import { MenuSection } from "./MenuSection";

const restaurantMenu = new MenuSection(
  "The Indian Kitchen"
);

const mainCourse: MenuSection = new MenuSection(
  "Main Course"
);

const desserts: MenuSection = new MenuSection("Dessert");

const item1 = new MenuItem(
  "Chicken Biryani",
  "Slow cooked dum biryani",
  550
);

const item2 = new MenuItem(
  "Paneer lababdar",
  "A royal delicacy",
  330
);

mainCourse.addMenuComponent(item1);
mainCourse.addMenuComponent(item2);

const item3 = new MenuItem(
  "Rabdi Gulab jamun",
  "Taste you don't want to miss out on",
  300
);

const item4 = new MenuItem(
  "Mango Cheesecake",
  "Summer treat that melts in your mouth",
  400
);

desserts.addMenuComponent(item3);
desserts.addMenuComponent(item4);

restaurantMenu.addMenuComponent(mainCourse);
restaurantMenu.addMenuComponent(desserts);

restaurantMenu.print();
