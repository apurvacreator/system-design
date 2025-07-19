import { NotificationManager } from "./NotificationManager";

const notificationManager = new NotificationManager();

const email = "Hello World in Email";
const sms = "Hello World in SMS";

notificationManager.addEmailNotification(email);
notificationManager.addSmsNotification(sms);

notificationManager.printAllNotification();
