import { UserService } from "../src/services/UserService";
import { UserValidator } from "../src/services/UserValidator";
import { EmailService } from "../src/services/EmailService";
import { IUserRepository } from "../src/services/IUserRepository";
import { IEmailStrategy } from "../src/services/IEmailStrategy";

describe("UserService", () => {
  let mockValidator: UserValidator;
  let mockRepo: IUserRepository;
  let mockEmailService: EmailService;

  beforeEach(() => {
    // Mocking dependencies
    mockValidator = {
      validate: jest.fn().mockReturnValue(true),
    };

    mockRepo = {
      save: jest.fn(),
    };

    const mockStrategy: IEmailStrategy = {
      send: jest.fn(),
    };

    mockEmailService = new EmailService(mockStrategy);
    jest.spyOn(mockEmailService, "sendEmail");
  });

  it("should register user when validation passes", () => {
    const userService = new UserService(
      mockValidator,
      mockRepo,
      mockEmailService
    );

    const userData = { email: "user@example.com", name: "Joko" };
    userService.register(userData);

    expect(mockValidator.validate).toHaveBeenCalledWith(userData);
    expect(mockRepo.save).toHaveBeenCalledWith(userData);
    expect(mockEmailService.sendEmail).toHaveBeenCalledWith(userData.email);
  });

  it("should not save or send email when validation fails", () => {
    (mockValidator.validate as jest.Mock).mockReturnValue(false);

    const userService = new UserService(
      mockValidator,
      mockRepo,
      mockEmailService
    );
    const userData = { email: "user@example.com", name: "Joko" };

    userService.register(userData);

    expect(mockValidator.validate).toHaveBeenCalledWith(userData);
    expect(mockRepo.save).not.toHaveBeenCalled();
    expect(mockEmailService.sendEmail).not.toHaveBeenCalled();
  });
});
