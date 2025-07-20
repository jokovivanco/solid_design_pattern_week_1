import { IEmailStrategy } from "../IEmailStrategy";

export class VerificationEmailStrategy implements IEmailStrategy {
  send(email: string) {
    console.log(`Sending verification email to ${email}`);
  }
}
