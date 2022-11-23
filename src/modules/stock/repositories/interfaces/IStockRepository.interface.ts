import { IStock } from "../../entity/interfaces/IStock.interface";
import { Stock } from "../../entity/stock.entity";

export interface IStockRepository {
  create(data: IStock): Promise<Stock>;
  getAvaiableByUserId(userId: string): Promise<IStock[]>;
  getByUserId(userId: string): Promise<IStock[]>;
}
