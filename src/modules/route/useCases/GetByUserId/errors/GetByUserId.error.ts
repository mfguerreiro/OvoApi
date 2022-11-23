import { UseCaseError } from "../../../../../core/errors/UseCaseError";

export class GetRouteByUserIdError extends Error implements UseCaseError {
  constructor() {
    super(`Erro ao listar rota por userId.`);
    this.name = "GetRouteByUserIdError";
  }
}
