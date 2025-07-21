import { NotificationService } from "./NotificationService";

export class EmailNotificationService
  implements NotificationService
{
  send(to, subject, body): void {
    console.log(`Sending email to: ${to}
            Subject: ${subject}
            Body: ${body}
        `);
  }
}
