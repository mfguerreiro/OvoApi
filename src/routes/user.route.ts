import { Router } from "express";
import { makeCreateUserController } from "../modules/user/factories/CreateUser.factory";
import { makeGetByDeviceIdController } from "../modules/user/factories/GetByDeviceId.factory";

const router = Router();

router.post(
  "/",
  makeCreateUserController().handle.bind(makeCreateUserController())
);

router.get(
  "/deviceId/:deviceId",
  makeGetByDeviceIdController().handle.bind(makeGetByDeviceIdController())
);

export default router;
