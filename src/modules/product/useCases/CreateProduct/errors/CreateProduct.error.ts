import { UseCaseError } from "../../../../../core/errors/UseCaseError";

export class CreateProductError extends Error implements UseCaseError {
  constructor() {
    super(`Erro ao criar produto.`);
    this.name = "CreateProductError";
  }
}
