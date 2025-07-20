export interface IEmailStrategy {
  send(email: string): void;
}
