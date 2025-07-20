import { IEmailStrategy } from "./IEmailStrategy";

export class EmailService {
  constructor(private strategy: IEmailStrategy) {}

  sendEmail(email: string) {
    this.strategy.send(email);
  }
}
