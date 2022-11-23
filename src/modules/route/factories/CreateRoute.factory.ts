import { RouteRepository } from "../repositories/route.repository";
import { CreateRouteController } from "../useCases/CreateRoute/CreateRoute.controller";
import { CreateRoute } from "../useCases/CreateRoute/CreateRoute.service";

export function makeCreateRouteController() {
  const routeRepository = new RouteRepository();
  const createRoute = new CreateRoute(routeRepository);
  const createRouteController = new CreateRouteController(createRoute);
  return createRouteController;
}
