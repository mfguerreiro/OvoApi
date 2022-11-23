import { UseCaseError } from "../../../../../core/errors/UseCaseError";

export class GetStockByUserIdError extends Error implements UseCaseError {
  constructor() {
    super(`Erro ao listar estoque por userId.`);
    this.name = "GetStockByUserIdError";
  }
}
