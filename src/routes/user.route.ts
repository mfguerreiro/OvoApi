import { Router } from "express";
import { makeCreateUserController } from "../modules/user/factories/CreateUser.factory";

const router = Router();

router.post(
  "/",
  makeCreateUserController().handle.bind(makeCreateUserController())
);

export default router;
