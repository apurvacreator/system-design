import { NotificationChannel } from "./NotificationChannel";

export class Whatsapp implements NotificationChannel {
  send(message) {
    console.log("Sending message in Whatsapp =>", message);
  }
}
