import { CreateStock } from "./CreateStock.service";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class CreateStockController {
  constructor(private createStock: CreateStock) {}

  async handle(req: Request, res: Response) {
    try {
      const {
        quantity,
        costValue,
        saleValue,
        purchaseDate,
        productId,
        userId,
      } = req.body;

      if (
        !quantity ||
        !costValue ||
        !saleValue ||
        !purchaseDate ||
        !productId ||
        !userId
      ) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          status: StatusCodes.BAD_REQUEST,
          message: "Parâmetros obrigatórios não informados",
        });
      }

      const result = await this.createStock.execute({
        quantity,
        costValue,
        saleValue,
        purchaseDate,
        productId,
        userId,
      });

      if (result.isLeft()) {
        console.error(`Erro ao criar estoque: `, result.value);
        return res.send(result.value);
      }

      return res.status(StatusCodes.CREATED).send();
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  }
}
