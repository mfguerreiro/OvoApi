import { connection } from "../../../config/TypeOrm.config";
import { IRoute } from "../entity/interfaces/IRoute.interface";
import { Route } from "../entity/route.entity";
import { IRouteRepository } from "./interfaces/IRouteRepository.interface";

export class RouteRepository implements IRouteRepository {
  async create(data: IRoute): Promise<Route> {
    const created = await connection
      .createQueryBuilder()
      .insert()
      .into(Route)
      .values(data)
      .returning("*")
      .execute();

    return created.generatedMaps[0] as Route;
  }
}
