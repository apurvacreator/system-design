import { User } from "./User";

// Mediator interface
export interface Mediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
}
