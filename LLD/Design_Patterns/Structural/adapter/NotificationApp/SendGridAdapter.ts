import { NotificationService } from "./NotificationService";
import { SendGridService } from "./SendGridService";

export class SendGridAdapter
  implements NotificationService
{
  private sendGridService: SendGridService;

  constructor(sendGridService) {
    this.sendGridService = sendGridService;
  }

  send(to, subject, body) {
    this.sendGridService.sendEmail(to, subject, body);
  }
}
