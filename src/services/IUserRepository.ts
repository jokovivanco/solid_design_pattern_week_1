import { IUser } from "./IUser";

export interface IUserRepository {
  save(userData: IUser): void;
}
