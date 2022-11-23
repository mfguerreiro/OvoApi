import { left, right } from "../../../../core/logic/Either";
import { IStockRepository } from "../../repositories/interfaces/IStockRepository.interface";
import { GetStockByUserIdError } from "./errors/GetByUserId.error";

export class GetStockByUserId {
  constructor(private stockRepository: IStockRepository) {}

  async execute(userId: string) {
    try {
      console.info("Iniciando busca do estoque pelo user: ", userId);

      const stocks = await this.stockRepository.getByUserId(userId);

      return right(stocks);
    } catch (error) {
      console.error("Erro ao listar estoque por id: ", error);
      return left(new GetStockByUserIdError());
    }
  }
}
