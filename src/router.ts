import { Router } from "express";

const router = Router();

router.post("/teste", (req, res) => {
  console.log("Chegou no teste");

  res.send("Chegou no teste");
});

export { router };
