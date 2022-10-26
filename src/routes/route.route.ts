import { Router } from "express";

const router = Router();

router.use("/route", () => {
  console.log("teste route");
});

export default router;
