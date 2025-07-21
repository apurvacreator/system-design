import { MenuComponent } from "./MenuComponent";

export class MenuItem implements MenuComponent {
  constructor(
    private name: string,
    private description: string,
    private price: number
  ) {}

  print(): void {
    console.log(
      `Item: ${this.name} 
       Decription: ${this.description} 
       Price: ${this.price}`
    );
  }
}
