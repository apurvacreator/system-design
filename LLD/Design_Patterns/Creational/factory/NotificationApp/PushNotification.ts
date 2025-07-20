import { Notification } from "./Notification";

export class PushNotification implements Notification {
  send(): void {
    console.log(`Sending push notification`);
  }
}
