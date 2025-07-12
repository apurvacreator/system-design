import { NotificationChannel } from "./NotificationChannel";

export class NotificationService {
  #notificationChannel: NotificationChannel;
  constructor(notificationChannel) {
    this.#notificationChannel = notificationChannel;
  }

  sendNotification(message) {
    this.#notificationChannel.send(message);
  }
}
