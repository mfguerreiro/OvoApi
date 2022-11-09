import { Either, left, right } from "../../../../core/logic/Either";
import { User } from "../../entity/user.entity";
import { IUserRepository } from "../../repository/interfaces/IUserRepository.interface";
import { GetByDeviceIdError } from "./errors/GetByDeviceId.error";

export class GetByDeviceId {
  constructor(private userRepository: IUserRepository) {}

  async execute(
    deviceId: string
  ): Promise<Either<GetByDeviceIdError, User | null>> {
    try {
      console.log("Buscando usuário por deviceId: ", deviceId);

      const user = await this.userRepository.getByDeviceId(deviceId);

      return right(user);
    } catch (error) {
      console.error("Erro ao buscar usuário por deviceId: ", error);
      return left(new GetByDeviceIdError());
    }
  }
}
