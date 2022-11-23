import { StockRepository } from "../repositories/stock.repository";
import { CreateStockController } from "../useCases/CreateStock/CreateStock.controller";
import { CreateStock } from "../useCases/CreateStock/CreateStock.service";

export function makeCreateStockController() {
  const stockRepository = new StockRepository();
  const createStock = new CreateStock(stockRepository);
  const createStockController = new CreateStockController(createStock);
  return createStockController;
}
