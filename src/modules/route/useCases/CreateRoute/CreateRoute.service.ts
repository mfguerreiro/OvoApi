import { left, right } from "../../../../core/logic/Either";
import { IRoute } from "../../entity/interfaces/IRoute.interface";
import { IRouteRepository } from "../../repositories/interfaces/IRouteRepository.interface";
import { CreateRouteError } from "./errors/CreateRoute.error";

export class CreateRoute {
  constructor(private routeRepository: IRouteRepository) { }

  async execute(routeData: IRoute) {
    try {
      console.info("Iniciando criação da rota: ", routeData.name);

      const created = await this.routeRepository.create(routeData);

      return right(created);
    } catch (error) {
      console.error("Erro ao criar rota: ", error);
      return left(new CreateRouteError());
    }
  }
}
