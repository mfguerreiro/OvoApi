import { UseCaseError } from "../../../../../core/errors/UseCaseError";

export class GetByDeviceIdError extends Error implements UseCaseError {
  constructor() {
    super(`Erro ao buscar usuário pelo device id.`);
    this.name = "GetByDeviceIdError";
  }
}
