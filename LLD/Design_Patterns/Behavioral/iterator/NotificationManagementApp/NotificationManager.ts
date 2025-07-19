import { EmailNotification } from "./EmailNotification";
import { Iterator } from "./iterator";
import { Notification } from "./Notification";
import { SMSNotification } from "./SMSNotification";

export class NotificationManager {
  private emailNotification: EmailNotification;
  private smsNotification: SMSNotification;
  constructor() {
    this.emailNotification = new EmailNotification();
    this.smsNotification = new SMSNotification();
  }

  addEmailNotification(message: string) {
    this.emailNotification.addNotification(message);
  }

  addSmsNotification(message: string) {
    this.smsNotification.addNotification(message);
  }

  printAllNotification() {
    this.printNotification(
      this.emailNotification.createIterator(),
      "Email"
    );

    this.printNotification(
      this.smsNotification.createIterator(),
      "SMS"
    );
  }

  printNotification(
    iterator: Iterator<Notification>,
    type: string
  ) {
    console.log(`${type} - Notifications`);
    while (iterator.hasNext()) {
      console.log(iterator.next());
    }
  }
}
