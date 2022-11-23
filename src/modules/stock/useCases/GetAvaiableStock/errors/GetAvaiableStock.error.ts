import { UseCaseError } from "../../../../../core/errors/UseCaseError";

export class GetAvaiableStockError extends Error implements UseCaseError {
  constructor() {
    super(`Erro ao buscar estoques disponíveis.`);
    this.name = "GetAvaiableStockError";
  }
}
