import { left, right } from "../../../../core/logic/Either";
import { IProduct } from "../../entity/interfaces/IProduct.interface";
import { IProductRepository } from "../../repositories/interfaces/IProduct.repository";
import { CreateProductError } from "./errors/CreateProduct.error";

export class CreateProduct {
    constructor(private productRepository: IProductRepository){}

    async execute(productData: IProduct){
        try {
            console.info("Iniciando criação do produto: ", productData.name);

      const created = await this.productRepository.create(productData);

      return right(created);
        } catch (error) {
            console.error("Erro ao criar produto: ", error);
            return left(new CreateProductError());
        }
    }
}