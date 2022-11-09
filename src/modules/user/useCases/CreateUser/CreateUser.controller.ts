import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes/build/cjs/status-codes";
import { CreateUser } from "./CreateUser.service";

export class CreateUserController {
  constructor(private createUser: CreateUser) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, deviceId } = req.body;

      if (!name || !deviceId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          status: StatusCodes.BAD_REQUEST,
          message: "Parâmetros obrigatórios não informados",
        });
      }

      const result = await this.createUser.execute({
        name,
        deviceId,
      });

      if (result.isLeft()) {
        console.log(`Erro ao criar usuário: `);
        res.send(result.value);
      }

      res.status(StatusCodes.CREATED).send();
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  }
}
