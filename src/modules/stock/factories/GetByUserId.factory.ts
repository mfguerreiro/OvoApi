import { StockRepository } from "../repositories/stock.repository";
import { GetStockByUserIdController } from "../useCases/GetStockByUser/GetByUserId.controller";
import { GetStockByUserId } from "../useCases/GetStockByUser/GetByUserId.service";

export function makeGetAvaiableStockController() {
  const stockRepository = new StockRepository();
  const getStockByUserId = new GetStockByUserId(stockRepository);
  const getStockByUserIdController = new GetStockByUserIdController(
    getStockByUserId
  );
  return getStockByUserIdController;
}
