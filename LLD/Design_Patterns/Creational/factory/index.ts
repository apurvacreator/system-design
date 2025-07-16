import { NotificationFactory } from "./NotificationFactory";

const smsClient = NotificationFactory.createClient("sms");
const emailClient =
  NotificationFactory.createClient("email");

smsClient.send();
emailClient.send();

// invalid client request
NotificationFactory.createClient("whatsapp");
