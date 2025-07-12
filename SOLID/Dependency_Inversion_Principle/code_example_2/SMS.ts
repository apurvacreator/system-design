import { NotificationChannel } from "./NotificationChannel";

export class SMS implements NotificationChannel {
  send(message) {
    console.log("Sending sms =>", message);
  }
}
