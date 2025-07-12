export class EditorMemento {
  constructor(private readonly state: string) {}

  getState(): string {
    return this.state;
  }
}
