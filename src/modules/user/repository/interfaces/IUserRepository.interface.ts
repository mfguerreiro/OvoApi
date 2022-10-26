import { IUser } from "../../entity/interfaces/IUser.interface";

export interface IUserRepository {
  create(data: IUser): Promise<IUser>;
}
