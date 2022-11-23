import { UseCaseError } from "../../../../../core/errors/UseCaseError";

export class GetProductByUserIdError extends Error implements UseCaseError {
  constructor() {
    super(`Erro ao listar produtos por userId.`);
    this.name = "GetProductByUserIdError";
  }
}
