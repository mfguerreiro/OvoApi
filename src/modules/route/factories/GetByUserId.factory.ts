import { RouteRepository } from "../repositories/route.repository";
import { GetRouteByUserIdController } from "../useCases/GetByUserId/GetByUserId.controller";
import { GetRouteByUserId } from "../useCases/GetByUserId/GetByUserId.service";

export function makeGetRouteByUserIdController() {
  const routeRepository = new RouteRepository();
  const getRouteByUserId = new GetRouteByUserId(routeRepository);
  const getRouteByUserIdController = new GetRouteByUserIdController(
    getRouteByUserId
  );
  return getRouteByUserIdController;
}
