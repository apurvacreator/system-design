import { EmailNotification } from "./EmailNotification";
import { Notification } from "./Notification";
import { PushNotification } from "./PushNotification";
import { SMSNotification } from "./SMSNotification";

export class NotificationFactory {
  static createClient(type: string): Notification {
    switch (type.toLowerCase()) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Error(
          "Unsupported notification client type"
        );
    }
  }
}
