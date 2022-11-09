import { RouteRepository } from "../repositories/route.repository";
import { CreateRouteController } from "../useCases/CreateRoute/CreateRoute.controller";
import { CreateRoute } from "../useCases/CreateRoute/CreateRoute.service";

export function makeCreateRouteController() {
  const userRepository = new RouteRepository();
  const createUser = new CreateRoute(userRepository);
  const createUserController = new CreateRouteController(createUser);
  return createUserController;
}
