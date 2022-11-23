import { ProductRepository } from "../repositories/product.repository";
import { CreateProductController } from "../useCases/CreateProduct/CreateProduct.controller";
import { CreateProduct } from "../useCases/CreateProduct/CreateProduct.service";

export function makeCreateProductController() {
  const productRepository = new ProductRepository();
  const createProduct = new CreateProduct(productRepository);
  const createProductController = new CreateProductController(createProduct);
  return createProductController;
}
