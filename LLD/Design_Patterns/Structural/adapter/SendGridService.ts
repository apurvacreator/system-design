export class SendGridService {
  sendEmail(recipient, title, content): void {
    console.log(`Sending email to: ${recipient}
            Subject: ${title}
            Body: ${content}
        `);
  }
}
