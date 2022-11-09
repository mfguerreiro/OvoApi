import { IUser } from "../../entity/interfaces/IUser.interface";
import { User } from "../../entity/user.entity";

export interface IUserRepository {
  getByDeviceId(deviceId: string): Promise<User | null>;
  create(data: IUser): Promise<User>;
}
