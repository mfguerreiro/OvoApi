import { UseCaseError } from "../../../../../core/errors/UseCaseError";

export class CreateStockError extends Error implements UseCaseError {
  constructor() {
    super(`Erro ao criar estoque.`);
    this.name = "CreateStockError";
  }
}
