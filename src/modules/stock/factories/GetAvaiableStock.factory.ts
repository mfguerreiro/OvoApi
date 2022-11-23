import { StockRepository } from "../repositories/stock.repository";
import { GetAvaiableStockController } from "../useCases/GetAvaiableStock/GetAvaiableStock.controller";
import { GetAvaiableStock } from "../useCases/GetAvaiableStock/GetAvaiableStock.service";

export function makeGetAvaiableStockController() {
  const stockRepository = new StockRepository();
  const getAvaiableStock = new GetAvaiableStock(stockRepository);
  const getAvaiableStockController = new GetAvaiableStockController(
    getAvaiableStock
  );
  return getAvaiableStockController;
}
