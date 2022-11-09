import { IUser } from "../../entity/interfaces/IUser.interface";
import { User } from "../../entity/user.entity";

export interface IUserRepository {
  create(data: IUser): Promise<User>;
}
