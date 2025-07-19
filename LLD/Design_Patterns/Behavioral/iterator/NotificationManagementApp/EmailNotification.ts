import { Iterator } from "./iterator";
import { Notification } from "./Notification";
import { NotificationCollection } from "./NotificationCollection";

export class EmailNotification
  implements NotificationCollection
{
  private emailNotifications: Notification[] = [];

  addNotification(message: string): void {
    this.emailNotifications.push(new Notification(message));
  }

  createIterator(): Iterator<Notification> {
    return new EmailNotificationIterator(
      this.emailNotifications
    );
  }
}

class EmailNotificationIterator
  implements Iterator<Notification>
{
  private index = 0;

  constructor(private notifications: Notification[]) {}

  next(): Notification | null {
    return this.index < this.notifications.length
      ? this.notifications[this.index++]
      : null;
  }

  hasNext(): Boolean {
    return this.index < this.notifications.length;
  }
}
