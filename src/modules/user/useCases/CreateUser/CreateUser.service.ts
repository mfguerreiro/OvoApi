import { Either, left, right } from "../../../../core/logic/Either";
import { IUser } from "../../entity/interfaces/IUser.interface";
import { IUserRepository } from "../../repository/interfaces/IUserRepository.interface";
import { CreateUserError } from "./errors/CreateUser.error";

export class CreateUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: IUser): Promise<Either<CreateUserError, IUser>> {
    try {
      console.info("Iniciando criação do usuário: ", userData.name);

      const existingUser = await this.userRepository.getByDeviceId(userData.deviceId);

      if(existingUser){
        console.info(`Usuário do device id '${userData.deviceId}' já existente '${existingUser.id}' e será retornado.`);

        return right(existingUser);
      }

      const created = await this.userRepository.create(userData);

      return right(created);
    } catch (error) {
      console.error("Erro ao criar usuário: ", error);
      return left(new CreateUserError());
    }
  }
}
