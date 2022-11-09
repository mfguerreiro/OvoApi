import { CreateRoute } from "./CreateRoute.service";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class CreateRouteController {
  constructor(private createRoute: CreateRoute) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, userId } = req.body;

      if (!name || !userId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          status: StatusCodes.BAD_REQUEST,
          message: "Parâmetros obrigatórios não informados",
        });
      }

      const result = await this.createRoute.execute({
        name,
        userId,
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
