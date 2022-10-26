import { UserRepository } from "../repository/user.repository";
import { CreateUserController } from "../useCases/CreateUser/CreateUser.controller";
import { CreateUser } from "../useCases/CreateUser/CreateUser.service";

export function makeCreateUserController() {
  const userRepository = new UserRepository();
  const createUser = new CreateUser(userRepository);
  const createUserController = new CreateUserController(createUser);
  return createUserController;
}
