import { Router } from "express";
import { makeCreateProductController } from "../modules/product/factories/CreateProduct.factory";
import { makeGetProductByUserIdController } from "../modules/product/factories/GetByUserId.factory";

const router = Router();

router.post(
  "/",
  makeCreateProductController().handle.bind(makeCreateProductController())
)

.get(
  "/userId/:userId",
  makeGetProductByUserIdController().handle.bind(makeGetProductByUserIdController())
);

export default router;
