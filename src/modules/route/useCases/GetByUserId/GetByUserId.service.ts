import { left, right } from "../../../../core/logic/Either";
import { IRouteRepository } from "../../repositories/interfaces/IRouteRepository.interface";
import { GetRouteByUserIdError } from "./errors/GetByUserId.error";

export class GetRouteByUserId {
  constructor(private routeRepository: IRouteRepository) {}

  async execute(userId: string) {
    try {
      console.info("Iniciando busca da rota pelo user: ", userId);

      const routes = await this.routeRepository.getByUserId(userId);

      return right(routes);
    } catch (error) {
      console.error("Erro ao listar rota por id: ", error);
      return left(new GetRouteByUserIdError());
    }
  }
}
