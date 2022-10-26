import { UseCaseError } from "../../../../../core/errors/UseCaseError";

export class CreateUserError extends Error implements UseCaseError {
  constructor() {
    super(`Erro ao criar usuário.`);
    this.name = "CreateUserError";
  }
}
