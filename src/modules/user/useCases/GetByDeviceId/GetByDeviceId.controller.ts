import { GetByDeviceId } from "./GetByDeviceId.service";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export class GetByDeviceIdController {
  constructor(private getByDeviceId: GetByDeviceId) {}

  async handle(req: Request, res: Response) {
    try {
      const deviceId = req.params.deviceId;

      console.log("deviceId", deviceId);

      if (!deviceId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          status: StatusCodes.BAD_REQUEST,
          message: "Parâmetros obrigatórios não informados",
        });
      }

      const result = await this.getByDeviceId.execute(deviceId);

      if (result.isLeft()) {
        res.send(result.value);
      }

      res.status(StatusCodes.OK).json(result.value);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  }
}
