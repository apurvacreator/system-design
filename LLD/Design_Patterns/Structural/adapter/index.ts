import { EmailNotificationService } from "./EmailNotificationService";
import { NotificationService } from "./NotificationService";
import { SendGridAdapter } from "./SendGridAdapter";
import { SendGridService } from "./SendGridService";

console.log("Legacy email service");
const emailService: NotificationService =
  new EmailNotificationService();

emailService.send(
  "abc@example.com",
  "Your course review",
  "Congrats on completing the course"
);

console.log(
  "Support for new email service provider using Adapter"
);
const sendGridService: NotificationService =
  new SendGridAdapter(new SendGridService());

sendGridService.send(
  "abc@example.com",
  "Your course review",
  "Congrats on completing the course"
);
