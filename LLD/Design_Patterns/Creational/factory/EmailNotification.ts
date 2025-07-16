import { Notification } from "./Notification";

export class EmailNotification implements Notification {
  send(): void {
    console.log(`Sending notification using email`);
  }
}
