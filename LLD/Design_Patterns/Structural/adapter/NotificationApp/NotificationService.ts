export interface NotificationService {
  send(to: string, subject: string, body: string): void;
}
