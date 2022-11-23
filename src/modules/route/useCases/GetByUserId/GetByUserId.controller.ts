import { GetRouteByUserId } from "./GetByUserId.service";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class GetRouteByUserIdController {
  constructor(private getRouteByUserId: GetRouteByUserId) {}

  async handle(req: Request, res: Response) {
    try {
      const userId = req.params.userId;

      if (!userId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          status: StatusCodes.BAD_REQUEST,
          message: "Parâmetros obrigatórios não informados",
        });
      }

      const result = await this.getRouteByUserId.execute(userId);

      if (result.isLeft()) {
        console.log(`Erro ao listar rota por usuário: `, result.value);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(result.value);
      }

      return res.status(StatusCodes.OK).json(result.value);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  }
}
