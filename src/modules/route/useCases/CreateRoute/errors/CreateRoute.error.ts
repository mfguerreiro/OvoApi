import { UseCaseError } from "../../../../../core/errors/UseCaseError";

export class CreateRouteError extends Error implements UseCaseError {
  constructor() {
    super(`Erro ao criar rota.`);
    this.name = "CreateRouteError";
  }
}
