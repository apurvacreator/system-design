import { NotificationFactory } from "./NotificationFactory";

const smsClient = NotificationFactory.createClient("sms");
const emailClient =
  NotificationFactory.createClient("email");
const pushClient = NotificationFactory.createClient("push");

smsClient.send();
emailClient.send();
pushClient.send();

// invalid client request
// NotificationFactory.createClient("whatsapp"); This will throw an error
