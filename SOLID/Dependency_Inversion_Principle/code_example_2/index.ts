import { Email } from "./Email";
import { NotificationService } from "./NotificationService";
import { SMS } from "./SMS";
import { Whatsapp } from "./Whatsapp";

const email = new Email();
const sms = new SMS();
const whatsApp = new Whatsapp();

const emailNotification = new NotificationService(email);
const smsNotification = new NotificationService(sms);
const whatsappNotification = new NotificationService(
  whatsApp
);

emailNotification.sendNotification("This is an email");
smsNotification.sendNotification("This is a sms");
whatsappNotification.sendNotification(
  "This is a whatsapp message"
);
