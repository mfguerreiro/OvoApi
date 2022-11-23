import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { GetStockByUserId } from "./GetByUserId.service";

export class GetStockByUserIdController {
  constructor(private getStockByUserId: GetStockByUserId) {}

  async handle(req: Request, res: Response) {
    try {
      const userId = req.params.userId;

      if (!userId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          status: StatusCodes.BAD_REQUEST,
          message: "Parâmetros obrigatórios não informados",
        });
      }

      const result = await this.getStockByUserId.execute(userId);

      if (result.isLeft()) {
        console.log(`Erro ao listar estoque por usuário: `, result.value);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(result.value);
      }

      return res.status(StatusCodes.OK).json(result.value);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  }
}
