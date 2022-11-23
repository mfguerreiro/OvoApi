import { left, right } from "../../../../core/logic/Either";
import { IProductRepository } from "../../repositories/interfaces/IProduct.repository";
import { GetProductByUserIdError } from "./errors/GetByUserId.error";

export class GetProductByUserId {
  constructor(private productRepository: IProductRepository) {}

  async execute(userId: string) {
    try {
      console.info("Iniciando busca de produtos pelo user: ", userId);

      const products = await this.productRepository.getByUserId(userId);

      return right(products);
    } catch (error) {
      console.error("Erro ao listar rota por id: ", error);
      return left(new GetProductByUserIdError());
    }
  }
}
