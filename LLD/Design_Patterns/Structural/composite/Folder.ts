import { FileSystem } from "./FileSystem";

export class Folder implements FileSystem {
  private components: FileSystem[] = [];

  constructor(private name: string) {}

  addComponent(component: FileSystem) {
    this.components.push(component);
  }

  display(): void {
    console.log(`Folder: ${this.name}`);
    for (const component of this.components) {
      component.display();
    }
  }
}
