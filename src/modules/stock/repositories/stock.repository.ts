import { connection } from "../../../config/TypeOrm.config";
import { IStock } from "../entity/interfaces/IStock.interface";
import { Stock } from "../entity/stock.entity";
import { IStockRepository } from "./interfaces/IStockRepository.interface";

export class StockRepository implements IStockRepository {
  stockRepository = connection.getRepository(Stock);

  async create(data: IStock): Promise<Stock> {
    const created = await connection
      .createQueryBuilder()
      .insert()
      .into(Stock)
      .values(data)
      .returning("*")
      .execute();

    return created.generatedMaps[0] as Stock;
  }

  async getAvaiableByUserId(userId: string): Promise<IStock[]> {
    const stocks = await this.stockRepository
      .createQueryBuilder("Stock")
      .where("Stock.userId = :userId")
      .andWhere("Stock.quantity > 0")
      .setParameters({ userId })
      .getMany();

    return stocks;
  }

  async getByUserId(userId: string): Promise<IStock[]> {
    const stocks = await this.stockRepository.findBy({ userId });

    return stocks;
  }

  async getLastCodeByUserId(userId: string): Promise<number> {
    const stock = await this.stockRepository.findOne({ where: { userId }, order: { created_at: 'DESC' } });

    return stock?.code || 0;
  }

}
