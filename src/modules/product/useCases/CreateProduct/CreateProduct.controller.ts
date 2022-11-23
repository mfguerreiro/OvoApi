import { CreateProduct } from "./CreateProduct.service";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class CreateProductController {
  constructor(private createProduct: CreateProduct) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, userId } = req.body;

      if (!name || !userId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          status: StatusCodes.BAD_REQUEST,
          message: "Parâmetros obrigatórios não informados",
        });
      }

      const result = await this.createProduct.execute({
        name,
        userId,
      });

      if (result.isLeft()) {
        console.log(`Erro ao criar produto: `);
        return res.send(result.value);
      }

      return res.status(StatusCodes.CREATED).send();
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  }
}
