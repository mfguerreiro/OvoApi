import { connection } from "../../../config/TypeOrm.config";
import { IUser } from "../entity/interfaces/IUser.interface";
import { User } from "../entity/user.entity";
import { IUserRepository } from "./interfaces/IUserRepository.interface";

export class UserRepository implements IUserRepository {
  async create(data: IUser): Promise<User> {
    const created = await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(data)
      .returning("*")
      .execute();

    return created.generatedMaps[0] as User;
  }
}
