import { Iterator } from "./iterator";
import { Notification } from "./Notification";

export interface NotificationCollection {
  createIterator(): Iterator<Notification>;
  addNotification(message: string): void;
}
