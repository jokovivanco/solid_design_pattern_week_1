import { IUser } from "./IUser";
import { IUserRepository } from "./IUserRepository";

export class InMemoryUserRepository implements IUserRepository {
  private users: IUser[] = [];

  save(userData: IUser) {
    this.users.push(userData);
    console.log("User saved:", userData);
  }
}
