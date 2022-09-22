import { Router } from "express";

const router = Router();

router.post("/test", (req, res) => {
  console.log("Chegou no teste");

  res.json({ test: "Chegou no teste" });
});

export { router };
