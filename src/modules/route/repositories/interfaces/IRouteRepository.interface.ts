import { IRoute } from "../../entity/interfaces/IRoute.interface";
import { Route } from "../../entity/route.entity";

export interface IRouteRepository {
  create(data: IRoute): Promise<Route>;
}
