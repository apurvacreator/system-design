import { MenuComponent } from "./MenuComponent";

export class MenuSection implements MenuComponent {
  private menuComponents: MenuComponent[];
  private sectionName: string;

  constructor(sectionName: string) {
    this.menuComponents = [];
    this.sectionName = sectionName;
  }

  addMenuComponent(component: MenuComponent) {
    this.menuComponents.push(component);
  }

  print(): void {
    console.log(`${this.sectionName}`);
    for (const component of this.menuComponents) {
      component.print();
    }
  }
}
