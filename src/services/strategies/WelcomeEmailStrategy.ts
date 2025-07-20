import { IEmailStrategy } from "../IEmailStrategy";

export class WelcomeEmailStrategy implements IEmailStrategy {
  send(email: string) {
    console.log(`Sending welcome email to ${email}`);
  }
}
