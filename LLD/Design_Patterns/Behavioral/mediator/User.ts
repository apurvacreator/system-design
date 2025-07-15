import { Mediator } from "./Mediator";

// Colleague
export class User {
  constructor(
    private name: string,
    private mediator: Mediator
  ) {}

  get userName() {
    return this.name;
  }

  send(message: string) {
    console.log(`${this.name} sent message: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string, sender: string) {
    console.log(
      `${this.name} received message ${message} from ${sender}`
    );
  }
}
