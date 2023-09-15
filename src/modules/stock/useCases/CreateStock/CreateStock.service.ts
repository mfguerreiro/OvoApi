import { left, right } from "../../../../core/logic/Either";
import { IStock } from "../../entity/interfaces/IStock.interface";
import { IStockRepository } from "../../repositories/interfaces/IStockRepository.interface";
import { CreateStockError } from "./errors/CreateStock.error";

export class CreateStock {
  constructor(private stockRepository: IStockRepository) {}

  async execute(stockData: IStock) {
    try {
      console.info(
        "Iniciando criação do estoque para o produto: ",
        stockData.productId
      );

      let lastCode = await this.stockRepository.getLastCodeByUserId(stockData.userId);

      stockData.code = lastCode++;
      stockData.purchaseDate = new Date(stockData.purchaseDate);

      const created = await this.stockRepository.create(stockData);

      return right(created);
    } catch (error) {
      console.error("Erro ao criar estoque: ", error);
      return left(new CreateStockError());
    }
  }
}
