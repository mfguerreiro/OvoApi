import { ProductRepository } from "../repositories/product.repository";
import { GetProductByUserIdController } from "../useCases/GetByUserId/GetByUserId.controller";
import { GetProductByUserId } from "../useCases/GetByUserId/GetByUserId.service";

export function makeGetProductByUserIdController() {
  const productRepository = new ProductRepository();
  const getProductByUserId = new GetProductByUserId(productRepository);
  const getProductByUserIdController = new GetProductByUserIdController(
    getProductByUserId
  );
  return getProductByUserIdController;
}
