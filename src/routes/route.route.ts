import { Router } from "express";
import { makeCreateRouteController } from "../modules/route/factories/CreateRoute.factory";
import { makeGetRouteByUserIdController } from "../modules/route/factories/GetByUserId.factory";

const router = Router();

router.post(
  "/",
  makeCreateRouteController().handle.bind(makeCreateRouteController())
);

router.get(
  "/userId/:userId",
  makeGetRouteByUserIdController().handle.bind(makeGetRouteByUserIdController())
);

export default router;
