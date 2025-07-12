import { NotificationChannel } from "./NotificationChannel";

export class Email implements NotificationChannel {
  send(message) {
    console.log("Sending email =>", message);
  }
}
