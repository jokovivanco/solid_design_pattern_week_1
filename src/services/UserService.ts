import { EmailService } from "./EmailService";
import { IUser } from "./IUser";
import { IUserRepository } from "./IUserRepository";
import { UserValidator } from "./UserValidator";

export class UserService {
  constructor(
    private validator: UserValidator,
    private repository: IUserRepository,
    private emailService: EmailService
  ) {}

  register(userData: IUser) {
    // validate using validator dependency
    if (this.validator.validate(userData)) {
      // save to db
      this.repository.save(userData);
      // notify email
      this.emailService.sendEmail(userData.email);
    }
  }
}
