import { Router } from "express";
import { makeCreateStockController } from "../modules/stock/factories/CreateStock.factory";
import { makeGetAvaiableStockController } from "../modules/stock/factories/GetAvaiableStock.factory";

const router = Router();

router
  .post(
    "/",
    makeCreateStockController().handle.bind(makeCreateStockController())
  )
  .get(
    "/getAvaiable/:userId",
    makeGetAvaiableStockController().handle.bind(
      makeGetAvaiableStockController()
    )
  )
  .get(
    "/userId/:userId",
    makeGetAvaiableStockController().handle.bind(
      makeGetAvaiableStockController()
    )
  );

export default router;
