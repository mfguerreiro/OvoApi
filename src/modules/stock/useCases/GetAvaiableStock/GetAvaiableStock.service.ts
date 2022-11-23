import { left, right } from "../../../../core/logic/Either";
import { IStockRepository } from "../../repositories/interfaces/IStockRepository.interface";
import { GetAvaiableStockError } from "./errors/GetAvaiableStock.error";

export class GetAvaiableStock {
  constructor(private stockRepository: IStockRepository) {}

  async execute(userId: string) {
    try {
      console.info("Iniciando busca de estoques disponíveis: ", userId);

      const routes = await this.stockRepository.getAvaiableByUserId(userId);

      return right(routes);
    } catch (error) {
      console.error("Erro ao listar rota por id: ", error);
      return left(new GetAvaiableStockError());
    }
  }
}
