import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { GetAvaiableStock } from "./GetAvaiableStock.service";

export class GetAvaiableStockController {
  constructor(private getAvaiableStock: GetAvaiableStock) {}

  async handle(req: Request, res: Response) {
    try {
      const userId = req.params.userId;

      if (!userId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          status: StatusCodes.BAD_REQUEST,
          message: "Parâmetros obrigatórios não informados",
        });
      }

      const result = await this.getAvaiableStock.execute(userId);

      if (result.isLeft()) {
        console.log(`Erro ao listar estoques disponíveis: `, result.value);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(result.value);
      }

      return res.status(StatusCodes.OK).json(result.value);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  }
}
