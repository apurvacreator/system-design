import { Iterator } from "./iterator";
import { Notification } from "./Notification";
import { NotificationCollection } from "./NotificationCollection";

export class SMSNotification
  implements NotificationCollection
{
  private smsNotifications: Set<Notification> = new Set();

  addNotification(message: string): void {
    this.smsNotifications.add(new Notification(message));
  }

  createIterator(): Iterator<Notification> {
    return new SMSNotificationIterator(
      this.smsNotifications
    );
  }
}

class SMSNotificationIterator
  implements Iterator<Notification>
{
  private notifications: IterableIterator<Notification>;
  private buffer: IteratorResult<Notification> | null =
    null;

  constructor(notifications: Set<Notification>) {
    this.notifications = notifications.values();
  }

  next(): Notification | null {
    let result;
    if (this.buffer) {
      result = this.buffer;
      this.buffer = null;
    } else {
      result = this.notifications.next();
    }
    return !result.done ? result.value : null;
  }

  hasNext(): Boolean {
    if (this.buffer === null) {
      this.buffer = this.notifications.next();
    }
    return !this.buffer.done;
  }
}
