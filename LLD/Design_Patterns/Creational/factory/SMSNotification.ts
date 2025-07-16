import { Notification } from "./Notification";

export class SMSNotification implements Notification {
  send(): void {
    console.log(`Sending notification using sms`);
  }
}
