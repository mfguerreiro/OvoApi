import { IProduct } from "../../entity/interfaces/IProduct.interface";
import { Product } from "../../entity/product.entity";

export interface IProductRepository {
  create(data: IProduct): Promise<Product>;
  getByUserId(userId: string): Promise<IProduct[]>;
}
