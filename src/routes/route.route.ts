import { Router } from "express";
import { makeCreateRouteController } from "../modules/route/factories/CreateRoute.factory";

const router = Router();

router.post(
  "/",
  makeCreateRouteController().handle.bind(makeCreateRouteController())
);

export default router;
