import { connection } from "../../../config/TypeOrm.config";
import { IProduct } from "../entity/interfaces/IProduct.interface";

import { Product } from "../entity/product.entity";
import { IProductRepository } from "./interfaces/IProduct.repository";

export class ProductRepository implements IProductRepository {
  routeRepository = connection.getRepository(Product);

  async create(data: IProduct): Promise<Product> {
    const created = await connection
    .createQueryBuilder()
    .insert()
    .into(Product)
    .values(data)
    .returning("*")
    .execute();

  return created.generatedMaps[0] as Product;
  }

  async getByUserId(userId: string): Promise<IProduct[]> {
    const routes = await this.routeRepository.findBy({ userId });

    return routes;
  }

}