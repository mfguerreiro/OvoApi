import { Either, left, right } from "../../../../core/logic/Either";
import { IUser } from "../../entity/interfaces/IUser.interface";
import { IUserRepository } from "../../repository/interfaces/IUserRepository.interface";
import { CreateUserError } from "./errors/CreateUser.error";

export class CreateUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: IUser): Promise<Either<CreateUserError, IUser>> {
    try {
      console.error("Iniciando criação do usuário: ", userData.name);

      const created = await this.userRepository.create(userData);

      return right(created);
    } catch (error) {
      console.error("Erro ao criar usuário: ", error);
      return left(new CreateUserError());
    }
  }
}
