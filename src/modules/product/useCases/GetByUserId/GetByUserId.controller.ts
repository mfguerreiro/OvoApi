import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { GetProductByUserId } from "./GetByUserId.service";

export class GetProductByUserIdController {
  constructor(private getProductByUserId: GetProductByUserId) {}

  async handle(req: Request, res: Response) {
    try {
      const userId = req.params.userId;

      if (!userId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          status: StatusCodes.BAD_REQUEST,
          message: "Parâmetros obrigatórios não informados",
        });
      }

      const result = await this.getProductByUserId.execute(userId);

      if (result.isLeft()) {
        console.log(`Erro ao listar produto por usuário: `);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(result.value);
      }

      return res.status(StatusCodes.OK).json(result.value);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  }
}
