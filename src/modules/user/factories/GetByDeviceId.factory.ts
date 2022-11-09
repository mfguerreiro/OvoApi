import { UserRepository } from "../repository/user.repository";
import { GetByDeviceIdController } from "../useCases/GetByDeviceId/GetByDeviceId.controller";
import { GetByDeviceId } from "../useCases/GetByDeviceId/GetByDeviceId.service";

export function makeGetByDeviceIdController() {
  const userRepository = new UserRepository();
  const getByDeviceId = new GetByDeviceId(userRepository);
  const getByDeviceIdController = new GetByDeviceIdController(getByDeviceId);
  return getByDeviceIdController;
}
