import { Mediator } from "./Mediator";
import { User } from "./User";

// Concrete Mediator
export class Chatroom implements Mediator {
  private users: User[];
  constructor() {
    this.users = [];
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    for (const user of this.users) {
      if (user !== sender) {
        user.receive(message, sender.userName);
      }
    }
  }
}
